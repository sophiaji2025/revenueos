import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot } from 'lucide-react';
import { cn } from '../../lib/utils';
import {
  INITIAL_MESSAGES,
  ASSISTANT_PLAN,
  FOLLOW_UP_CHIPS,
  CANNED_RESPONSES,
  type ChatMessage,
} from '../../data/chatScripts';

let msgCounter = 100;

function useTypewriter(text: string, speed = 12) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

function AssistantMessage({ content, streaming }: { content: string; streaming?: boolean }) {
  const displayed = useTypewriter(streaming ? content : '', 8);
  const text = streaming ? displayed : content;

  return (
    <div className="flex gap-3 group">
      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Bot className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-violet-400">RevenueOS AI</span>
          <span className="text-[10px] text-white/30 font-mono">09:41:05</span>
        </div>
        <div className="text-sm text-white/80 leading-relaxed">
          {text.split('\n').map((line, i) => {
            if (line.startsWith('→ **') || line.startsWith('📅 **')) {
              const parts = line.replace('→ ', '').replace('📅 ', '').split('**');
              return (
                <p key={i} className="mb-1">
                  {line.startsWith('→') && <span className="text-violet-400 mr-1">→</span>}
                  {line.startsWith('📅') && <span className="mr-1">📅</span>}
                  {parts.map((p, j) =>
                    j % 2 === 1
                      ? <strong key={j} className="text-white font-semibold">{p}</strong>
                      : <span key={j}>{p}</span>
                  )}
                </p>
              );
            }
            if (line.startsWith('**') && line.endsWith('**')) {
              return <p key={i} className="font-semibold text-white mb-1">{line.slice(2, -2)}</p>;
            }
            return line ? <p key={i} className="mb-1">{line}</p> : <br key={i} />;
          })}
          {streaming && displayed.length < content.length && (
            <span className="inline-block w-0.5 h-4 bg-violet-400 animate-pulse ml-0.5 align-text-bottom" />
          )}
        </div>
      </div>
    </div>
  );
}

function UserMessage({ content }: { content: string }) {
  return (
    <div className="flex gap-3 justify-end">
      <div className="max-w-[80%] bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-2.5">
        <p className="text-sm text-white/90">{content}</p>
      </div>
      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white/60">
        U
      </div>
    </div>
  );
}

function ThinkingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
        <Bot className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="flex items-center gap-1.5 py-2">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-violet-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

type ChatEntry = ChatMessage & { streaming?: boolean };

export function MissionChatPanel({ autonomousMode: _autonomousMode }: { autonomousMode: boolean }) {
  const [messages, setMessages] = useState<ChatEntry[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    setMessages(INITIAL_MESSAGES.map(m => ({ ...m })));

    setTimeout(() => setIsThinking(true), 600);

    setTimeout(() => {
      setIsThinking(false);
      setMessages(prev => [
        ...prev,
        {
          id: 'assistant-plan',
          role: 'assistant' as const,
          content: ASSISTANT_PLAN,
          timestamp: '09:41:05',
          streaming: true,
        },
      ]);
    }, 2200);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatEntry = {
      id: `user-${++msgCounter}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    const chipKey = Object.keys(CANNED_RESPONSES).find(k => text.toLowerCase().includes(k));
    const response = chipKey
      ? CANNED_RESPONSES[chipKey]
      : `Understood. Processing: "${text}".\n\nAgents updated with new parameters. Adjusting mission execution accordingly.`;

    setTimeout(() => {
      setIsThinking(false);
      setMessages(prev => [
        ...prev,
        {
          id: `assistant-${++msgCounter}`,
          role: 'assistant' as const,
          content: response,
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
          streaming: true,
        },
      ]);
    }, 1200 + Math.random() * 800);
  }, []);

  return (
    <div className="flex flex-col h-full bg-white/[0.02] border-r border-white/[0.06]">
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-white/[0.06] flex-shrink-0">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
          <Bot className="w-3.5 h-3.5 text-white" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white/90">Mission Copilot</p>
          <p className="text-[10px] text-emerald-400 font-mono">Active · VP Eng Mission</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
        <AnimatePresence initial={false}>
          {messages.map(msg => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {msg.role === 'user' ? (
                <UserMessage content={msg.content} />
              ) : (
                <AssistantMessage content={msg.content} streaming={msg.streaming} />
              )}
            </motion.div>
          ))}
          {isThinking && (
            <motion.div key="thinking" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <ThinkingIndicator />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-white/[0.06] flex-shrink-0">
        {FOLLOW_UP_CHIPS.map(chip => (
          <button
            key={chip.id}
            onClick={() => sendMessage(chip.prompt)}
            className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/60 hover:text-white/90 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
          >
            {chip.label}
          </button>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-white/[0.06] flex-shrink-0">
        <div className="flex gap-2 items-center bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2">
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage(inputValue)}
            placeholder="Give the AI a new instruction..."
            className="flex-1 bg-transparent text-sm text-white/80 placeholder-white/30 outline-none min-w-0"
          />
          <button
            onClick={() => sendMessage(inputValue)}
            className="w-6 h-6 rounded-md bg-violet-500/20 hover:bg-violet-500/40 flex items-center justify-center transition-colors"
            aria-label="Send message"
          >
            <Send className="w-3 h-3 text-violet-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
