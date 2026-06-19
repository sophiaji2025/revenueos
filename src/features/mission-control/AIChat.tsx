import { useMemo, useRef, useState } from 'react'
import { Send, Sparkles } from 'lucide-react'

import { Avatar } from '../../components/ui/Avatar'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { ScrollArea } from '../../components/ui/ScrollArea'
import { chatResponses, suggestedPrompts } from '../../data/chatScripts'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

function resolveResponse(prompt: string): string {
  const normalized = prompt.toLowerCase()
  const matchedKey = Object.keys(chatResponses).find((key) => key !== 'default' && normalized.includes(key))
  const chunks = chatResponses[matchedKey ?? 'default']
  return chunks.join('')
}

export function AIChat(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'assistant-welcome',
      role: 'assistant',
      content: 'I am watching account signals, pipeline risk, and outreach performance. Ask for a ranked account list, a deal brief, or a draft follow-up.',
    },
  ])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const streamRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const promptChips = useMemo(() => suggestedPrompts.slice(0, 5), [])

  const cleanupTimers = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (streamRef.current) {
      window.clearInterval(streamRef.current)
      streamRef.current = null
    }
  }

  const sendMessage = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed || isThinking) {
      return
    }

    cleanupTimers()
    const userMessage: Message = { id: `user-${Date.now()}`, role: 'user', content: trimmed }
    const assistantId = `assistant-${Date.now()}`
    setMessages((current) => [...current, userMessage])
    setInput('')
    setIsThinking(true)

    timerRef.current = window.setTimeout(() => {
      setMessages((current) => [...current, { id: assistantId, role: 'assistant', content: '' }])
      const response = resolveResponse(trimmed)
      let index = 0
      streamRef.current = window.setInterval(() => {
        index += 1
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId ? { ...message, content: response.slice(0, index) } : message,
          ),
        )
        if (index >= response.length) {
          cleanupTimers()
          setIsThinking(false)
        }
      }, 20)
    }, 800)
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>RevenueOS AI</CardTitle>
            <p className="mt-1 text-sm text-white/55">Streaming GTM reasoning with contextual follow-up suggestions.</p>
          </div>
          <Avatar initials="AI" size="sm" />
        </div>
      </CardHeader>
      <CardContent className="flex h-[560px] flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {promptChips.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => sendMessage(prompt)}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-white/70 transition hover:bg-white/[0.08] hover:text-white"
            >
              {prompt}
            </button>
          ))}
        </div>

        <ScrollArea className="flex-1 pr-2">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'assistant' && <Avatar initials="AI" size="sm" />}
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === 'assistant'
                      ? 'glass text-white'
                      : 'bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white'
                  }`}
                >
                  {message.content || (isThinking ? <span className="inline-flex gap-1"><span className="pulse-glow">•</span><span className="pulse-glow" style={{ animationDelay: '150ms' }}>•</span><span className="pulse-glow" style={{ animationDelay: '300ms' }}>•</span></span> : null)}
                </div>
                {message.role === 'user' && <Avatar initials="YOU" size="sm" gradient="from-cyan-500 via-sky-500 to-indigo-500" />}
              </div>
            ))}
            {isThinking && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex items-start gap-3">
                <Avatar initials="AI" size="sm" />
                <div className="glass rounded-2xl px-4 py-3 text-sm text-white/70">
                  <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-violet-300" />Thinking…</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <form
          className="flex gap-3"
          onSubmit={(event) => {
            event.preventDefault()
            sendMessage(input)
          }}
        >
          <Input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about accounts, sequences, or pipeline risk..." />
          <Button type="submit" size="icon" disabled={isThinking}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
