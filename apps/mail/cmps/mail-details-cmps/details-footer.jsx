export function DetailsFooter({ mail, onReply }) {
  return (
    <section className='mail-details-footer'>
      <div className='mail-footer-actions'>
        <button onClick={onReply} className='btn-secondary'>
          Reply
        </button>
        <button className='btn-secondary'>Move</button>
      </div>
    </section>
  )
}
