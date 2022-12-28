import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails, onMailStarred, onMailRemoved, onMailToNotes, onToggleRead }) {
  return (
    <ul className='mail-list flex flex-column'>
      {mails.map((mail) => {
        return (
          <li key={`${mail.id}`}>
            <MailPreview
              mail={mail}
              onMailRemoved={onMailRemoved}
              onMailStarred={onMailStarred}
              onMailToNotes={onMailToNotes}
              onToggleRead={onToggleRead}
            />
          </li>
        )
      })}
    </ul>
  )
}
