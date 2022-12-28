const { useState, useEffect, useRef } = React

import { MailList } from '../cmps/mail-list.jsx'

import { mailService } from '../services/mail.service.js'

export function MailIndex() {
  const [mails, setMails] = useState([])
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

  useEffect(() => {
    loadMails()
  }, [])

  function onRemoveMail(mailId) {
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
      {mails && <MailList mails={mails} onRemoveMail={onRemoveMail} />}
    </section>
  )
}
