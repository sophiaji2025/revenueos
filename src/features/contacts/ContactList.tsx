import { Avatar } from '../../components/ui/Avatar'
import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { ScrollArea } from '../../components/ui/ScrollArea'
import type { Contact } from '../../data/contacts'
import { companies } from '../../data/companies'
import { cn } from '../../lib/utils'

interface ContactListProps {
  contacts: Contact[]
  selectedContactId: string
  onSelect: (contactId: string) => void
}

const companyMap = new Map(companies.map((company) => [company.id, company.name]))

export function ContactList({ contacts, selectedContactId, onSelect }: ContactListProps): JSX.Element {
  return (
    <ScrollArea className="h-[calc(100vh-140px)] pr-2">
      <div className="space-y-3">
        {contacts.map((contact) => (
          <button key={contact.id} type="button" className="w-full text-left" onClick={() => onSelect(contact.id)}>
            <Card className={cn('p-4 transition-all hover:bg-white/[0.05]', selectedContactId === contact.id && 'border-violet-400/30 bg-violet-500/[0.08]')}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Avatar initials={contact.avatar} gradient={contact.color} />
                  <div>
                    <div className="font-medium text-white">{contact.name}</div>
                    <div className="text-sm text-white/55">{contact.title}</div>
                    <div className="mt-1 text-xs text-white/40">{companyMap.get(contact.company)}</div>
                  </div>
                </div>
                <Badge variant={contact.engagementScore >= 85 ? 'success' : contact.engagementScore >= 75 ? 'info' : 'warning'}>
                  {contact.engagementScore}
                </Badge>
              </div>
            </Card>
          </button>
        ))}
      </div>
    </ScrollArea>
  )
}
