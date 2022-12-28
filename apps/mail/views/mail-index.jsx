const { useState, useEffect, useRef } = React

import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailList } from '../cmps/mail-list.jsx'

import { mailService } from '../services/mail.service.js'

export function MailIndex() {
  const [mails, setMails] = useState([])
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

  useEffect(() => {
    loadMails()
  }, [])

  function onMailStarred(mail) {
    mail.isStared = !mail.isStared
    mailService.save(mail).then((mail) => {
      loadMails()
    })
  }
  function onMailToNotes(mailId) {
    console.log('mailId:', mailId)
  }
  function onToggleRead(mail) {
    mail.isRead = !mail.isRead
    mailService.save(mail).then((mail) => {
      loadMails()
    })
  }

  function onCheckMail(mailId) {
    console.log('mailId:', mailId)
  }

  function onMailRemoved(mailId) {
    mailService
      .remove(mailId)
      .then(() => {
        const updatedMails = mails.filter((mail) => mail.id !== mailId)
        setMails(updatedMails)
      })
      .catch((err) => {
        console.log('err onRemoveMail:', err)
      })
  }

  function sendMail(mail) {
    mailService.save(mail).then(() => {
      loadMails()
    })
  }

  function loadMails() {
    mailService.query().then((mails) => {
      setMails(mails)
      if (!mails.length) {
        console.log('error: couldnt find mails to preview')
      }
    })
  }

  console.log('mails:', mails)

  return (
    <section className='mail-index'>
      <MailCompose sendMail={sendMail} />
      {mails && (
        <MailList
          mails={mails}
          onCheckMail={onCheckMail}
          onMailRemoved={onMailRemoved}
          onMailStarred={onMailStarred}
          onMailToNotes={onMailToNotes}
          onToggleRead={onToggleRead}
        />
      )}
    </section>
  )
}
