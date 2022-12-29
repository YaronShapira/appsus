export function DetailsHeader({ mail, onPrintMail }) {
  return (
    <section className='mail-details-header flex align-center justify-between'>
      <div className='mail-subject'>
        <div>
          <span className='mail-subject-txt'>{mail.subject}</span>
          <span className='tag'>{mail.status}</span>
        </div>
      </div>
      <div className='mail-details-header-actions'>
        <button
          onClick={(ev) => {
            onPrintMail(ev)
          }}
          className='btn-rnd-l'>
          <i className='fa-solid fa-print'></i>
        </button>
      </div>
    </section>
  )
}
