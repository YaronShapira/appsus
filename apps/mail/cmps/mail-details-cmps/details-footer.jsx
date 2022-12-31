export function DetailsFooter({ mail, onEdit }) {
  return (
    <section className='mail-details-footer'>
      <div className='mail-footer-actions'>
        <button onClick={onEdit} className='btn-secondary'>
          {mail.status === 'draft' && 'Edit'}
          {mail.status === 'inbox' && 'Reply'}
          {mail.status === 'sent' || (mail.status === 'trash' && 'Delete')}
        </button>
        {mail.status === 'draft' ||
          (mail.status === 'inbox' && (
            <button className='btn-secondary'>
              {mail.status === 'draft' && 'Trash'}
              {mail.status === 'inbox' && 'Move'}
            </button>
          ))}
      </div>
    </section>
  )
}
