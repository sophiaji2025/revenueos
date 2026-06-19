import { useMemo, useState } from 'react'
import { Clock3, Linkedin, Mail, Phone, Plus, RefreshCw, Trash2 } from 'lucide-react'

import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { ScrollArea } from '../../components/ui/ScrollArea'
import { Switch } from '../../components/ui/Switch'
import { Textarea } from '../../components/ui/Textarea'
import type { SequenceStep, SequenceTemplate } from '../../data/sequences'
import { EmailPreview } from './EmailPreview'
import { cn } from '../../lib/utils'

interface SequenceBuilderProps {
  templates: SequenceTemplate[]
  selectedTemplateId: string
  onSelectTemplate: (templateId: string) => void
}

const iconMap = {
  email: Mail,
  linkedin_connect: Linkedin,
  linkedin_message: Linkedin,
  call: Phone,
  wait: Clock3,
}

export function SequenceBuilder({ templates, selectedTemplateId, onSelectTemplate }: SequenceBuilderProps): JSX.Element {
  const selectedTemplate = useMemo(
    () => templates.find((template) => template.id === selectedTemplateId) ?? templates[0],
    [selectedTemplateId, templates],
  )
  const [steps, setSteps] = useState<SequenceStep[]>(selectedTemplate.steps)
  const [selectedStepId, setSelectedStepId] = useState(selectedTemplate.steps[0]?.id ?? '')
  const [tone, setTone] = useState(35)
  const [length, setLength] = useState(150)
  const [referenceFunding, setReferenceFunding] = useState(true)
  const [referenceHiring, setReferenceHiring] = useState(true)
  const [referenceActivity, setReferenceActivity] = useState(false)
  const [regenerationCount, setRegenerationCount] = useState(0)

  const toneLabel = tone > 60 ? 'Casual' : tone < 40 ? 'Formal' : 'Balanced'

  const selectedStep = steps.find((step) => step.id === selectedStepId) ?? steps[0]

  const derivedBody = useMemo(() => {
    const base = selectedStep?.body ?? selectedStep?.message ?? 'Choose a step to start editing.'
    const intro = tone > 60
      ? 'Quick note — '
      : tone < 40
        ? 'I wanted to share a concise recommendation. '
        : 'Wanted to send a timely follow-up. '

    const references = [
      referenceFunding ? 'Reference recent funding momentum and enterprise growth priorities.' : null,
      referenceHiring ? 'Mention active hiring across revenue systems or field sales.' : null,
      referenceActivity ? 'Tie the message to a recent post, page visit, or leadership comment.' : null,
    ].filter(Boolean)

    const trimmed = `${intro}${base} ${references.join(' ')}`.trim()
    return trimmed.slice(0, length + regenerationCount * 2)
  }, [length, referenceActivity, referenceFunding, referenceHiring, regenerationCount, selectedStep, tone])

  const previewSubject = selectedStep?.subject ? `${selectedStep.subject}${regenerationCount % 2 === 0 ? '' : ' — quick follow-up'}` : undefined

  const handleSelectTemplate = (templateId: string) => {
    const nextTemplate = templates.find((template) => template.id === templateId)
    if (!nextTemplate) return
    onSelectTemplate(templateId)
    setSteps(nextTemplate.steps)
    setSelectedStepId(nextTemplate.steps[0]?.id ?? '')
  }

  const updateStep = (field: 'subject' | 'body' | 'message', value: string) => {
    if (!selectedStep) return
    setSteps((current) => current.map((step) => (step.id === selectedStep.id ? { ...step, [field]: value } : step)))
  }

  const addStep = () => {
    const nextDay = Math.max(...steps.map((step) => step.day)) + 2
    const newStep: SequenceStep = {
      id: `step-${Date.now()}`,
      type: 'email',
      day: nextDay,
      subject: 'New follow-up touchpoint',
      body: 'Hi {{firstName}}, sharing one more relevant idea based on your current priorities.',
    }
    setSteps((current) => [...current, newStep])
    setSelectedStepId(newStep.id)
  }

  const deleteStep = (stepId: string) => {
    setSteps((current) => current.filter((step) => step.id !== stepId))
    if (selectedStepId === stepId) {
      const remaining = steps.filter((step) => step.id !== stepId)
      setSelectedStepId(remaining[0]?.id ?? '')
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[280px,1fr,380px]">
      <Card>
        <CardHeader>
          <CardTitle>Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {templates.map((template) => (
              <button key={template.id} type="button" className={cn('w-full rounded-2xl border p-4 text-left transition-all', selectedTemplateId === template.id ? 'border-violet-400/30 bg-violet-500/[0.08]' : 'border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.05]')} onClick={() => handleSelectTemplate(template.id)}>
                <div className="font-medium text-white">{template.name}</div>
                <div className="mt-2 text-sm text-white/55">{template.description}</div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Sequence Builder</CardTitle>
            <Button variant="secondary" size="sm" onClick={addStep}>
              <Plus className="h-4 w-4" />
              Add step
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ScrollArea className="max-h-[340px] pr-2">
            <div className="space-y-3">
              {steps.map((step) => {
                const Icon = iconMap[step.type]
                return (
                  <div key={step.id} className={cn('rounded-2xl border p-4 transition-all', selectedStepId === step.id ? 'border-violet-400/30 bg-violet-500/[0.08]' : 'border-white/[0.08] bg-white/[0.03]')}>
                    <div className="flex items-start justify-between gap-3">
                      <button type="button" className="flex min-w-0 flex-1 items-start gap-3 text-left" onClick={() => setSelectedStepId(step.id)}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-violet-200">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-medium capitalize text-white">{step.type.replace('_', ' ')}</div>
                          <div className="mt-1 text-sm text-white/55">Day {step.day}</div>
                          <div className="mt-2 truncate text-sm text-white/65">{step.subject ?? step.message ?? step.body}</div>
                        </div>
                      </button>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={() => setSelectedStepId(step.id)}>
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => deleteStep(step.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollArea>

          {selectedStep && (
            <div className="grid gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
              {selectedStep.subject !== undefined && (
                <Input value={selectedStep.subject ?? ''} onChange={(event) => updateStep('subject', event.target.value)} placeholder="Subject line" />
              )}
              {(selectedStep.body !== undefined || selectedStep.message !== undefined) && (
                <Textarea
                  value={selectedStep.body ?? selectedStep.message ?? ''}
                  onChange={(event) => updateStep(selectedStep.body !== undefined ? 'body' : 'message', event.target.value)}
                  placeholder="Step content"
                />
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>AI personalization controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                <span>Tone</span>
                <span>{toneLabel}</span>
              </div>
              <input type="range" min={0} max={100} value={tone} onChange={(event) => setTone(Number(event.target.value))} className="w-full accent-violet-500" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                <span>Length</span>
                <span>{length} chars</span>
              </div>
              <input type="range" min={90} max={240} value={length} onChange={(event) => setLength(Number(event.target.value))} className="w-full accent-violet-500" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm text-white/70"><span>Reference funding</span><Switch checked={referenceFunding} onCheckedChange={setReferenceFunding} /></div>
              <div className="flex items-center justify-between text-sm text-white/70"><span>Reference hiring</span><Switch checked={referenceHiring} onCheckedChange={setReferenceHiring} /></div>
              <div className="flex items-center justify-between text-sm text-white/70"><span>Recent activity</span><Switch checked={referenceActivity} onCheckedChange={setReferenceActivity} /></div>
            </div>
            <Button className="w-full" onClick={() => setRegenerationCount((value) => value + 1)}>
              <RefreshCw className="h-4 w-4" />
              Regenerate
            </Button>
          </CardContent>
        </Card>

        <EmailPreview
          channelLabel={selectedStep?.type.replace('_', ' ') ?? 'email'}
          subject={previewSubject}
          body={derivedBody}
          toneLabel={`${toneLabel} · ${selectedTemplate.toneVariants[tone > 55 ? 'casual' : 'formal']}`}
        />
      </div>
    </div>
  )
}
