export function MailPreview({ mail, onMailStarred, onMailRemoved, onMailToNotes, onToggleRead }) {
  function formatTime(sentAt) {
    return 'Dec 27'
  }

  return (
    <article className={`mail-preview ${mail.isRead ? 'read' : ''}`}>
      <input type='checkbox' name='check-email'></input>
      <button
        onClick={() => {
          onMailStarred(mail)
        }}
        className='btn-rnd-s'>
        {mail.isStared ? (
          <i className='fa-regular fa-star fullstar'></i>
        ) : (
          <i className='fa-solid fa-star'></i>
        )}
      </button>
      <span className='mail-sender'>{mail.sender}</span>
      <span className='mail-subject line-clamp'>{mail.subject}</span>
      <span className='mail-body line-clamp'>{mail.body}</span>
      <span className='mail-time'>{formatTime(mail.sentAt)}</span>
      <div className='hover-actions'>
        <button
          onClick={() => {
            onMailRemoved(mail.id)
          }}
          className='btn-rnd-l'>
          <i className='fa-regular fa-trash-can'></i>
        </button>
        <button
          onClick={() => {
            onMailToNotes(mail.id)
          }}
          className='btn-rnd-l'>
          <i className='fa-regular fa-paper-plane'></i>
        </button>
        <button
          onClick={() => {
            onToggleRead(mail)
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
  )
}
