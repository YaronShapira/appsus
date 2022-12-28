import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails, onRemoveMail }) {
  return (
    <ul className='mail-list flex flex-column'>
      {mails.map((mail) => {
        return (
          <li key={`${mail.id}`}>
            <MailPreview mail={mail} onRemoveMail={onRemoveMail} />
          </li>
        )
      })}
    </ul>
  )
}
