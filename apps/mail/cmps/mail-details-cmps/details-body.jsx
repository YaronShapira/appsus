import { utilService } from '../../../../services/util.service.js'

export function DetailsBody({ mail, onMailStarred }) {
  function formatTime(timestamp) {
    return <h6 className='mail-time'>{timestamp}</h6>
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat('he-IL', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date)
  }

  console.log('mail:', mail)
  if (!mail) return <section>Loading...</section>
  return (
    <section className='mail-msg'>
      <div className='mail-msg-header flex align-center justify-between'>
        <div className='sender-details'>
          <div className='user-avatar'>
            <i className='fa-solid fa-user'></i>
          </div>
          <div className='user-details-txt'>
            <h6>{mail.sender}</h6>
            <small>{mail.from}</small>
          </div>
        </div>
        <div className='sender-info-actions flex align-center justify-between'>
          {`${formatDate(mail.sentAt)} (${utilService.formatTime(mail.sentAt)})`}
          <button
            onClick={(ev) => {
              onMailStarred(ev, mail)
            }}
            className='btn-rnd-l-s'>
            <i className='fa-solid fa-star'></i>
          </button>
        </div>
      </div>
      <div className='mail-msg-body'>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(mail.body) }}></div>
      </div>
    </section>
  )
}
