const { useState, useEffect, useRef } = React
import { mailService } from '../services/mail.service.js'

export function MailCompose({ sendMail }) {
  const [newMailToEdit, setNewMailToEdit] = useState(mailService.getEmptyMail())

  const [isMailEdited, setIsMailEdited] = useState(false)

  function onBtnPlus() {
    setIsMailEdited(!isMailEdited)
  }

  function onSendMail(ev) {
    ev.preventDefault()
    sendMail(mail, newMailToEdit)
  }

  function handleForm({ target }) {
    let { type, name: field, value } = target
    console.log('field:', field)
    console.log('value:', value)
    setNewMailToEdit((prevMailToEdit) => ({ ...prevMailToEdit, [field]: value }))
  }

  return (
    <section className='mail-compose'>
      <button
        onClick={onBtnPlus}
        className={`btn-rnd-l btn-mail-compose ${isMailEdited ? 'open' : ''}`}>
        <i className={`fa-solid ${!isMailEdited ? 'fa-pencil' : 'fa-minus'}`}></i>
      </button>
      <section className={`compose-mail-form ${isMailEdited ? 'open' : ''}`}>
        <form onSubmit={onSendMail}>
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
