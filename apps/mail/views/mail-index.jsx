const { useState, useEffect, useRef } = React
const { useSearchParams } = ReactRouterDOM

import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailList } from '../cmps/mail-list.jsx'

import { mailService } from '../services/mail.service.js'

export function MailIndex() {
  const [isMarked, setIsMarked] = useState(false)
  const [mails, setMails] = useState([])
  const [searchParams] = useSearchParams()
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

  useEffect(() => {
    setFilterBy((prevFilterBy) => {
      return { ...prevFilterBy, txt: searchParams.get('q') + '' }
    })
    loadMails({ txt: searchParams.get('q') })
  }, [searchParams])

  function loadMails(filterBy) {
    mailService.query(filterBy).then((mails) => {
      setMails(mails)
      if (!mails.length) {
        console.log('error: couldnt find mails to preview')
      }
    })
  }
  function onSetFilter(filterBy) {
    setFilterBy(filterBy)
  }
  function onMailStarred(ev, mail) {
    ev.stopPropagation()
    mail.isStared = !mail.isStared
    mailService.save(mail).catch(() => {
      loadMails(filterBy)
    })
    setMails((prev) => [...prev])
  }

  function onMailToNotes(ev, mailId) {
    ev.stopPropagation()
    console.log('mailId:', mailId)
  }

  function onToggleRead(ev, mail) {
    ev.stopPropagation()
    mail.isRead = !mail.isRead
    mailService.save(mail).then((mail) => {})
    setMails((prev) => [...prev])
  }

  function onCheckMail(ev, mailId) {
    ev.stopPropagation()
    console.log('mailId:', mailId)
  }

  function onMailRemoved(ev, mailId) {
    ev.stopPropagation()
    mailService.remove(mailId).catch((err) => {
      loadMails(filterBy)
      console.log('err onRemoveMail:', err)
    })
    const updatedMails = mails.filter((mail) => mail.id !== mailId)
    setMails(updatedMails)
  }

  function sendMail(mail) {
    mailService.save(mail).then(() => {
      loadMails(filterBy)
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
          isMarked={isMarked}
          setIsMarked={setIsMarked}
        />
      )}
    </section>
  )
}
