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
    sendMail(newMailToEdit)
    setIsMailEdited(!isMailEdited)
    setNewMailToEdit(mailService.getEmptyMail())
  }

  function handleForm({ target }) {
    let { type, name: field, value } = target
    setNewMailToEdit((prevMailToEdit) => ({ ...prevMailToEdit, [field]: value }))
  }
  console.log('newMailToEdit:', newMailToEdit)
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
            value={newMailToEdit.to}
            type='email'
            placeholder='To'
            name='to'
            id='to'
            onChange={handleForm}
          />
          <input
            value={newMailToEdit.subject}
            type='text'
            placeholder='Subject'
            name='subject'
            id='subject'
            onChange={handleForm}
          />
          <textarea
            value={newMailToEdit.body}
            placeholder='Your message...'
            name='body'
            rows={5}
            id='body'
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
