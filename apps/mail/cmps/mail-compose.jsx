const { useState, useEffect, useRef } = React
import { mailService } from '../services/mail.service.js'

export function MailCompose() {
  const [newMailToEdit, setNewMailToEdit] = useState(mailService.getEmptyMail())

  const [isMailEdited, setIsMailEdited] = useState(false)

  function onBtnPlus() {
    setIsMailEdited(!isMailEdited)
  }

  function handleForm({ target }) {
    let { type, name: field, value } = target
    setReviewToEdit((prevMailToEdit) => ({ ...prevMailToEdit, [field]: value }))
  }

  function onComposeMail() {}
  return (
    <section className='mail-compose'>
      <button
        onClick={onBtnPlus}
        className={`btn-rnd-l btn-mail-compose ${isMailEdited ? 'open' : ''}`}>
        <i className={`fa-solid ${!isMailEdited ? 'fa-plus' : 'fa-minus'}`}></i>
      </button>
      <section className={`compose-mail-form ${isMailEdited ? 'open' : ''}`}>
        <form onSubmit={onComposeMail}>
          <h4>New Mail</h4>
          <input
            value={newMailToEdit.mailTo}
            type='email'
            placeholder='To'
            name='mailTo'
            id='mailTo'
            onChange={handleForm}
          />
          <input
            value={newMailToEdit.mailSubject}
            type='text'
            placeholder='Subject'
            name='mailSubject'
            id='mailSubject'
            onChange={handleForm}
          />
          <textarea
            value={newMailToEdit.mailBody}
            placeholder='Your message...'
            name='mailBody'
            rows={5}
            id='mailBody'
            onChange={handleForm}
          />
          <button className='btn-primary' type='submit'>
            Send
          </button>
        </form>
      </section>
    </section>
  )
}
