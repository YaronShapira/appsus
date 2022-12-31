const { useState, useEffect, useRef } = React
import { eventBusService, showSuccessMsg } from '../../../services/event-bus.service.js'
import { uploadService } from '../../../services/upload.service.js'
import { mailService } from '../services/mail.service.js'

export function MailCompose({ sendMail, draftMail }) {
  const [newMailToEdit, setNewMailToEdit] = useState(mailService.getEmptyMail())
  const [isExpandedMsgWindow, setIsExpandedMsgWindow] = useState(false)
  const [isMailEdited, setIsMailEdited] = useState(false)
  const [isMailMinimized, setIsMailMinimized] = useState(false)
  const uploadImgInputRef = useRef(null)
  const [isImageUploaded, setIsImageUploaded] = useState(null)

  function onMinimizeMsgWindow() {
    setIsMailMinimized(!isMailMinimized)
    setIsExpandedMsgWindow(false)
  }

  function onExpandMsgWindow() {
    setIsExpandedMsgWindow(!isExpandedMsgWindow)
    setIsMailMinimized(false)
  }

  function onBtnToggleCompose() {
    setIsMailEdited(!isMailEdited)
    setIsExpandedMsgWindow(false)
    setIsMailMinimized(false)
  }

  function onDraftMail() {
    if (isImageUploaded) {
      newMailToEdit.attachedImg = isImageUploaded
    }
    if (newMailToEdit.to) {
      draftMail(newMailToEdit)
      setNewMailToEdit(mailService.getEmptyMail())
    }
    setIsMailEdited(!isMailEdited)
    setIsExpandedMsgWindow(false)
    setIsMailMinimized(false)
  }

  function onSendMail(ev) {
    if (isImageUploaded) {
      newMailToEdit.attachedImg = isImageUploaded
    }
    ev.preventDefault()
    sendMail(newMailToEdit)
    setIsMailEdited(!isMailEdited)
    setNewMailToEdit(mailService.getEmptyMail())
    setIsExpandedMsgWindow(false)
  }

  function handleForm({ target }) {
    let { type, name: field, value } = target
    setNewMailToEdit((prevMailToEdit) => ({ ...prevMailToEdit, [field]: value }))
  }

  function onUploadImg(ev) {
    // console.log(ev.target.files[0])
    loadImageFromInput(ev, (img) => {
      //   console.log(img.src)
      setIsImageUploaded(img.src)
    })
  }

  function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()
    // After we read the file
    reader.onload = (event) => {
      let img = new Image() // Create a new html img element
      img.src = event.target.result // Set the img src to the img file we read
      img.onload = () => {
        onImageReady(img)
      }
    }

    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
  }

  return (
    <section
      className={`mail-compose ${isMailEdited ? 'open' : ''} ${
        isExpandedMsgWindow ? 'expand' : ''
      }`}>
      <button
        title='Compose Mail'
        onClick={onBtnToggleCompose}
        className={`btn-rnd-l btn-mail-compose ${isMailEdited ? 'open' : ''} ${
          isMailMinimized ? 'minimized' : ''
        }`}>
        <i className={`fa-solid fa-pencil`}></i>
      </button>
      <section
        className={`compose-mail-form flex flex-column ${isMailEdited ? 'open' : ''} ${
          isExpandedMsgWindow ? 'expand' : ''
        }`}>
        <form
          onSubmit={onSendMail}
          className={`flex flex-column ${isMailMinimized ? 'minimized' : ''} `}>
          <section className='compose-mail-form-header flex align-center justify-between'>
            <h5>{}New Mail</h5>
            <div className='header-tools'>
              <button
                onClick={onMinimizeMsgWindow}
                title='Minimize'
                type='button'
                className='btn-rnd-s'>
                <i className='fa-solid fa-window-minimize'></i>
              </button>
              <button
                onClick={onExpandMsgWindow}
                title='Expand'
                type='button'
                className='btn-rnd-s'>
                {isExpandedMsgWindow ? (
                  <i class='fa-solid fa-down-left-and-up-right-to-center'></i>
                ) : (
                  <i className='fa-solid fa-up-right-and-down-left-from-center'></i>
                )}
              </button>
              <button
                onClick={onBtnToggleCompose}
                title='Close'
                type='button'
                className='btn-rnd-s'>
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
              rows={15}
              id='body'
              onChange={handleForm}
            />

            <input
              type='file'
              className='file-input btn'
              name='image'
              id='image'
              hidden
              ref={uploadImgInputRef}
              onChange={onUploadImg}
            />
          </div>

          {isImageUploaded && (
            <img src={isImageUploaded} alt='uploadedImg' className='uploaded-img' />
          )}
          <div className='compose-mail-form-footer flex align-center justify-between'>
            <button className='btn-primary' title='Send' type='submit'>
              Send
            </button>
            <section className='footer-tools'>
              <button
                title='Upload Image'
                onClick={() => uploadImgInputRef.current.click()}
                type='button'
                className='btn-rnd-l-s'>
                <i className='fa-solid fa-image'></i>
              </button>
              <button title='Draft' onClick={onDraftMail} type='button' className='btn-rnd-l-s'>
                <i className='fa-regular fa-trash-can'></i>
              </button>
            </section>
          </div>
        </form>
      </section>
    </section>
  )
}
