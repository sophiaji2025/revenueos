import { useState, useEffect, useCallback, useRef } from 'react';
import { LIVE_EVENT_TEMPLATES, type StreamEvent, SEED_EVENTS } from '../../data/eventStream';
import { COMPANIES, CONTACTS } from '../../data/agentSwarm';
import { AGENT_DEFINITIONS } from '../../data/agents';

export interface AgentState {
  id: string;
  status: 'running' | 'thinking' | 'idle' | 'syncing';
  currentTaskIndex: number;
  progress: number;
  logs: { time: string; text: string }[];
}

export interface MissionState {
  companiesScanned: number;
  icpMatched: number;
  contactsFound: number;
  emailsGenerated: number;
  linkedinGenerated: number;
  emailsSent: number;
  meetingsBooked: number;
  agentsOnline: number;
  prospectsFound: number;
  agentStates: Record<string, AgentState>;
  events: StreamEvent[];
}

const STATUSES: AgentState['status'][] = ['running', 'thinking', 'running', 'running', 'syncing', 'running'];
const MAX_COMPANIES_SCANNED = 1284;
const MAX_ICP_MATCHED = 73;
const MAX_CONTACTS = 73;
const MAX_EMAILS_GEN = 73;
const MAX_LINKEDIN_GEN = 73;
const MAX_EMAILS_SENT = 73;
const TARGET_MEETINGS = 15;

function randomBetween(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function formatTime() {
  return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

function fillTemplate(template: string): string {
  const company = COMPANIES[Math.floor(Math.random() * COMPANIES.length)];
  const contact = CONTACTS[Math.floor(Math.random() * CONTACTS.length)];
  const times = ['Mon 9am', 'Tue 2pm', 'Wed 11am', 'Thu 3pm', 'Fri 10am'];
  const subjects = ['How we helped Vercel ship 3x faster', 'Quick question about your eng team', 'Idea for your Q1 roadmap'];
  const signals = ['recent funding round', 'hiring spike (+34%)', 'new product launch', 'leadership change'];
  return template
    .replace('{company}', company)
    .replace('{name}', contact.name)
    .replace('{title}', contact.title)
    .replace('{n}', String(randomBetween(2, 8)))
    .replace('{step}', String(randomBetween(1, 3)))
    .replace('{date}', times[Math.floor(Math.random() * times.length)])
    .replace('{time}', times[Math.floor(Math.random() * times.length)])
    .replace('{score}', String(randomBetween(7, 10)))
    .replace('{subject}', subjects[Math.floor(Math.random() * subjects.length)])
    .replace('{signal}', signals[Math.floor(Math.random() * signals.length)]);
}

function createInitialAgentState(agentId: string, index: number): AgentState {
  return {
    id: agentId,
    status: STATUSES[index % STATUSES.length],
    currentTaskIndex: 0,
    progress: randomBetween(30, 70),
    logs: [],
  };
}

function createInitialState(): MissionState {
  const agentStates: Record<string, AgentState> = {};
  AGENT_DEFINITIONS.forEach((a, i) => {
    agentStates[a.id] = createInitialAgentState(a.id, i);
  });

  const events: StreamEvent[] = SEED_EVENTS.map((e, i) => ({ ...e, id: `seed-${i}` }));

  return {
    companiesScanned: 847,
    icpMatched: 52,
    contactsFound: 52,
    emailsGenerated: 28,
    linkedinGenerated: 12,
    emailsSent: 25,
    meetingsBooked: 7,
    agentsOnline: 6,
    prospectsFound: 52,
    agentStates,
    events,
  };
}

export function useMissionSimulation(autonomousMode: boolean) {
  const [state, setState] = useState<MissionState>(createInitialState);
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([]);

  const clearAllIntervals = useCallback(() => {
    intervalsRef.current.forEach(clearInterval);
    intervalsRef.current = [];
  }, []);

  useEffect(() => {
    clearAllIntervals();
    const speed = autonomousMode ? 1 : 3;

    const missionTick = setInterval(() => {
      setState(prev => {
        const next = { ...prev };
        if (next.companiesScanned < MAX_COMPANIES_SCANNED) {
          next.companiesScanned = Math.min(MAX_COMPANIES_SCANNED, next.companiesScanned + randomBetween(2, 8));
        }
        if (next.icpMatched < MAX_ICP_MATCHED) {
          next.icpMatched = Math.min(MAX_ICP_MATCHED, next.icpMatched + (Math.random() > 0.5 ? 1 : 0));
        }
        if (next.contactsFound < MAX_CONTACTS) {
          next.contactsFound = Math.min(MAX_CONTACTS, next.contactsFound + (Math.random() > 0.6 ? 1 : 0));
        }
        if (next.emailsGenerated < MAX_EMAILS_GEN) {
          next.emailsGenerated = Math.min(MAX_EMAILS_GEN, next.emailsGenerated + (Math.random() > 0.5 ? 1 : 0));
        }
        if (next.linkedinGenerated < MAX_LINKEDIN_GEN) {
          next.linkedinGenerated = Math.min(MAX_LINKEDIN_GEN, next.linkedinGenerated + (Math.random() > 0.7 ? 1 : 0));
        }
        if (next.emailsSent < next.emailsGenerated) {
          next.emailsSent = Math.min(next.emailsGenerated, next.emailsSent + (Math.random() > 0.6 ? 1 : 0));
        }
        if (next.meetingsBooked < TARGET_MEETINGS && Math.random() > 0.97) {
          next.meetingsBooked = Math.min(TARGET_MEETINGS, next.meetingsBooked + 1);
        }
        return next;
      });
    }, 800 * speed);
    intervalsRef.current.push(missionTick);

    AGENT_DEFINITIONS.forEach((agentDef, agentIndex) => {
      const baseDelay = agentIndex * 200;

      const taskInterval = setInterval(() => {
        setState(prev => {
          const agentState = prev.agentStates[agentDef.id];
          if (!agentState) return prev;
          const nextTaskIndex = (agentState.currentTaskIndex + 1) % agentDef.tasks.length;
          const nextStatus: AgentState['status'] = Math.random() > 0.7 ? 'thinking' : 'running';
          return {
            ...prev,
            agentStates: {
              ...prev.agentStates,
              [agentDef.id]: {
                ...agentState,
                currentTaskIndex: nextTaskIndex,
                status: nextStatus,
                progress: Math.min(100, agentState.progress + randomBetween(-3, 8)),
              },
            },
          };
        });
      }, (6000 + baseDelay) * speed);
      intervalsRef.current.push(taskInterval);

      const logInterval = setInterval(() => {
        setState(prev => {
          const agentState = prev.agentStates[agentDef.id];
          if (!agentState) return prev;
          const template = agentDef.logTemplates[Math.floor(Math.random() * agentDef.logTemplates.length)];
          const logLine = { time: formatTime(), text: fillTemplate(template) };
          const newLogs = [logLine, ...agentState.logs].slice(0, 4);
          return {
            ...prev,
            agentStates: {
              ...prev.agentStates,
              [agentDef.id]: { ...agentState, logs: newLogs },
            },
          };
        });
      }, (2500 + baseDelay * 2) * speed);
      intervalsRef.current.push(logInterval);
    });

    const eventInterval = setInterval(() => {
      setState(prev => {
        const template = LIVE_EVENT_TEMPLATES[Math.floor(Math.random() * LIVE_EVENT_TEMPLATES.length)];
        const newEvent: StreamEvent = {
          id: `evt-${Date.now()}-${Math.random()}`,
          type: template.type,
          agent: template.agent,
          message: fillTemplate(template.message),
          timestamp: formatTime(),
        };
        const newEvents = [newEvent, ...prev.events].slice(0, 50);
        return { ...prev, events: newEvents };
      });
    }, 3000 * speed);
    intervalsRef.current.push(eventInterval);

    return () => clearAllIntervals();
  }, [autonomousMode, clearAllIntervals]);

  return state;
}
