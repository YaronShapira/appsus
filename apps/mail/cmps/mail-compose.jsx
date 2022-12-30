const { useState, useEffect, useRef } = React
import { mailService } from '../services/mail.service.js'

export function MailCompose({ sendMail, draftMail }) {
  const [newMailToEdit, setNewMailToEdit] = useState(mailService.getEmptyMail())

  const [isMailEdited, setIsMailEdited] = useState(false)

  function onBtnToggleCompose() {
    setIsMailEdited(!isMailEdited)
  }

  function onDraftMail() {
    if (newMailToEdit.to) {
      draftMail(newMailToEdit)
      setNewMailToEdit(mailService.getEmptyMail())
    }
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

  return (
    <section className='mail-compose'>
      <button
        onClick={onBtnToggleCompose}
        className={`btn-rnd-l btn-mail-compose ${isMailEdited ? 'open' : ''}`}>
        <i className={`fa-solid fa-pencil`}></i>
      </button>
      <section className={`compose-mail-form ${isMailEdited ? 'open' : ''}`}>
        <form onSubmit={onSendMail}>
          <section className='compose-mail-form-header flex align-center justify-between'>
            <h5>New Mail</h5>
            <div className='footer-tools'>
              <button onClick={onDraftMail} type='button' className='btn-rnd-s'>
                <i className='fa-solid fa-window-minimize'></i>
              </button>
              <button type='button' className='btn-rnd-s'>
                <i className='fa-solid fa-up-right-and-down-left-from-center'></i>
              </button>
              <button onClick={onBtnToggleCompose} type='button' className='btn-rnd-s'>
                <i className='fa-solid fa-xmark'></i>
              </button>
            </div>
          </section>
          <div className='fields-container'>
            <div className='field-wrapper'>
              <label htmlFor='to'>To</label>
              <input
                autoComplete='off'
                value={newMailToEdit.to}
                type='email'
                name='to'
                id='to'
                onChange={handleForm}
              />
            </div>
            <div className='field-wrapper'>
              <label htmlFor='subject'>Subject</label>
              <input
                autoComplete='off'
                value={newMailToEdit.subject}
                type='text'
                name='subject'
                id='subject'
                onChange={handleForm}
              />
            </div>

            <textarea
              value={newMailToEdit.body}
              placeholder='Your message...'
              name='body'
              rows={10}
              id='body'
              onChange={handleForm}
            />
          </div>
          <div className='compose-mail-form-footer flex align-center justify-between'>
            <button className='btn-primary' type='submit'>
              Send
            </button>
            <section className='footer-tools'>
              <button onClick={onBtnToggleCompose} type='button' className='btn-rnd-l-s'>
                <i className='fa-solid fa-trash'></i>
              </button>
            </section>
          </div>
        </form>
      </section>
    </section>
  )
}
