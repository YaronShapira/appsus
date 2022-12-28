export function MailPreview({ mail }) {
  return (
    <article className={`mail-preview flex align-center ${mail.isRead ? 'read' : ''}`}>
      <input type='checkbox' name='check-email'></input>
      <button className='btn-rnd-s'>
        <i className={`fa-solid fa-star`}></i>
      </button>
      <span className='mail-sender'>{mail.sender}</span>
      <span className='mail-subject line-clamp'>{mail.subject}</span>
      <span className='mail-body line-clamp'>{mail.body}</span>
      <span className='mail-time'>Dec 27</span>
      <div className='hover-actions'>
        <button className='btn-rnd-l'>
          <i className={`fa-solid fa-star`}></i>
        </button>
        <button className='btn-rnd-l'>
          <i className={`fa-solid fa-star`}></i>
        </button>
        <button className='btn-rnd-l'>
          <i className={`fa-solid fa-star`}></i>
        </button>
      </div>
    </article>
  )
}
