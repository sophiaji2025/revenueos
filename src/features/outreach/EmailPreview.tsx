import { Badge } from '../../components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'

interface EmailPreviewProps {
  channelLabel: string
  subject?: string
  body: string
  toneLabel: string
}

export function EmailPreview({ channelLabel, subject, body, toneLabel }: EmailPreviewProps): JSX.Element {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Preview</CardTitle>
          <Badge variant="outline">{channelLabel}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-2xl border border-white/[0.08] bg-[#10141c] p-5">
          {subject && (
            <div className="border-b border-white/[0.08] pb-3">
              <div className="text-xs uppercase tracking-wide text-white/40">Subject</div>
              <div className="mt-2 text-sm font-medium text-white">{subject}</div>
            </div>
          )}
          <div className="pt-4 text-sm leading-7 text-white/70 whitespace-pre-wrap">{body}</div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs text-white/55">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3">
            <div className="text-white/40">Tone</div>
            <div className="mt-1 text-white/80">{toneLabel}</div>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3">
            <div className="text-white/40">Personalization</div>
            <div className="mt-1 text-white/80">Dynamic references enabled</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
