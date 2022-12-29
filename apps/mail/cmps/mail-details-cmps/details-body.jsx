import { utilService } from '../../../../services/util.service.js'

export function DetailsBody({ mail, onMailStarred }) {
  function formatTime(timestamp) {
    return <h6 className='mail-time'>{timestamp}</h6>
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
            <h5>{mail.sender}</h5>
            <small>{mail.from}</small>
          </div>
        </div>
        <div className='sender-info-actions flex align-center justify-between'>
          {utilService.formatTime(mail.sentAt)}
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
