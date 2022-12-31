import { MailPreview } from './mail-preview.jsx'

export function MailList({
  mails,
  onCheckMail,
  onMailStarred,
  onMailRemoved,
  onMailToNotes,
  onToggleRead,
  isAllChecked,
}) {
  return (
    <ul className='mail-list flex flex-column'>
      {mails.map((mail) => {
        return (
          <li key={`${mail.id}`}>
            <MailPreview
              mail={mail}
              onCheckMail={onCheckMail}
              onMailRemoved={onMailRemoved}
              onMailStarred={onMailStarred}
              onMailToNotes={onMailToNotes}
              onToggleRead={onToggleRead}
              isAllChecked={isAllChecked}
            />
          </li>
        )
      })}
    </ul>
  )
}
