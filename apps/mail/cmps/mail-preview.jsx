const { Fragment, useState } = React
const { Link, useParams, useNavigate, useSearchParams } = ReactRouterDOM

import { utilService } from '../../../services/util.service.js'
import { MailDetails } from '../views/mail-details.jsx'
import { DetailsPreview } from '../views/details-preview.jsx'

export function MailPreview({
  mail,
  onCheckMail,
  onMailStarred,
  onMailRemoved,
  onMailToNotes,
  onToggleRead,
}) {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isExpanded, setIsExpanded] = useState(false)

  function onActions(ev, action, value) {
    ev.stopPropagation()
    switch (action) {
      case 'remove':
        onMailRemoved(value)
        break
      case 'note':
        onMailToNotes(value)
        break
      case 'trash':
        onMailRemoved(value)
        break
      case 'star':
        onMailStarred(value)
        break
      case 'check':
        onCheckMail(value, ev)
        break
      case 'read':
        onToggleRead(value, ev)
        break
      default:
        break
    }
  }

  function onExpandedMsg() {
    onToggleRead(mail)
    setIsExpanded((prev) => !prev)
  }

  function onDisplayFullMsg(mailId) {
    navigate({
      pathname: `/mail/${mailId}`,
      search: `?q=${searchParams.get('q')}&folder=${mail.status}`,
    })
  }

  return (
    <Fragment>
      <article
        onClick={() => {
          onExpandedMsg(mail.id)
        }}
        className={`mail-preview ${mail.isRead ? 'read' : ''}`}>
        <input
          type='checkbox'
          name='check-email'
          onChange={(ev) => {
            onActions(ev, 'check', mail.id)
          }}></input>
        <button
          onClick={(ev) => {
            onActions(ev, 'star', mail)
          }}
          className='btn-rnd-l-s'>
          {mail.isStared ? (
            <i className='fa-solid fa-star'></i>
          ) : (
            <i className='fa-regular fa-star'></i>
          )}
        </button>
        <span className='mail-sender line-clamp'>{mail.sender}</span>
        <span className='mail-subject line-clamp'>{mail.subject}</span>
        <span className='mail-body line-clamp'>{mail.body.replace(/<[^>]*>?/gm, '')}...</span>
        <span className='mail-time'>{utilService.formatTime(mail.sentAt)}</span>
        <div className='hover-actions'>
          <button
            onClick={(ev) => {
              onActions(ev, 'trash', mail)
            }}
            className='btn-rnd-l'>
            <i className='fa-solid fa-trash'></i>
          </button>
          <button
            onClick={(ev) => {
              onActions(ev, 'note', mail.id)
            }}
            className='btn-rnd-l'>
            <i className='fa-regular fa-paper-plane'></i>
          </button>
          <button
            onClick={(ev) => {
              onActions(ev, 'read', mail)
            }}
            className='btn-rnd-l'>
            {mail.isRead ? (
              <i className='fa-regular fa-envelope'></i>
            ) : (
              <i className='fa-solid fa-envelope-open'></i>
            )}
          </button>
        </div>
      </article>
      {isExpanded && (
        <DetailsPreview mail={mail} display={'index'} onDisplayFullMsg={onDisplayFullMsg} />
      )}
      {/* <MailDetails /> */}
    </Fragment>
  )
}
