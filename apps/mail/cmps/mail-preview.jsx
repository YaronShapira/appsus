export function MailPreview({
  mail,
  onCheckMail,
  onMailStarred,
  onMailRemoved,
  onMailToNotes,
  onToggleRead,
}) {
  function formatTime(sentAt) {
    return 'Dec 27'
  }

  return (
    <article className={`mail-preview ${mail.isRead ? 'read' : ''}`}>
      <input
        type='checkbox'
        name='check-email'
        onChange={() => {
          onCheckMail(mail.id)
        }}></input>
      <button
        onClick={() => {
          onMailStarred(mail)
        }}
        className='btn-rnd-s'>
        {mail.isStared ? (
          <i className='fa-solid fa-star'></i>
        ) : (
          <i className='fa-regular fa-star'></i>
        )}
      </button>
      <span className='mail-sender line-clamp'>{mail.sender}</span>
      <span className='mail-subject line-clamp'>{mail.subject}</span>
      <span className='mail-body line-clamp'>{mail.body}</span>
      <span className='mail-time'>{formatTime(mail.sentAt)}</span>
      <div className='hover-actions'>
        <button
          onClick={() => {
            onMailRemoved(mail.id)
          }}
          className='btn-rnd-l'>
          <i className='fa-solid fa-trash'></i>
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
