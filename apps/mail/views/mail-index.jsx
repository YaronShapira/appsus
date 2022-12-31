const { useState, useEffect, useRef } = React
const { useSearchParams } = ReactRouterDOM

import { PageLayout } from '../../../cmps/page-layout.jsx'
import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import Loader from '../../../cmps/loader.jsx'
import { mailService } from '../services/mail.service.js'
import { eventBusService, showSuccessMsg } from '../../../services/event-bus.service.js'

export function MailIndex() {
  const [isMarked, setIsMarked] = useState(false)
  const [mails, setMails] = useState([])
  const [searchParams] = useSearchParams()
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  useEffect(() => {
    loadMails({
      ...filterBy,
      txt: searchParams.get('q') || '',
      status: searchParams.get('folder') || 'inbox',
      isStared: searchParams.get('isStared') || false,
    })
  }, [])

  useEffect(() => {
    setFilterBy((prevFilterBy) => {
      return {
        ...prevFilterBy,
        txt: searchParams.get('q') + '' || '',
        status: searchParams.get('folder') || 'inbox',
        isStared: searchParams.get('isStared') || false,
      }
    })
  }, [searchParams])

  useEffect(() => {
    loadMails(filterBy)
  }, [filterBy])

  function loadMails(filterBy) {
    mailService.query(filterBy).then((mails) => {
      setMails(mails)
      if (!mails.length) {
        console.log('error: couldnt find mails to preview')
      }
    })
  }

  function onMailStarred(mail) {
    mail.isStared = !mail.isStared
    mailService.save(mail).catch(() => {
      loadMails(filterBy)
    })
    let msg = mail.isStared ? 'Mail Stared' : 'Mail Unstared'
    showSuccessMsg(msg)
    setMails((prev) => [...prev])
    eventBusService.emit('recount-mails', 'Stared')
  }

  function onMailToNotes(mailId) {
    console.log('mailId:', mailId)
  }

  function onToggleRead(mail) {
    mail.isRead = !mail.isRead
    setMails((prev) => [...prev])
    mailService.save(mail).catch((mail) => {
      mail.isRead = !mail.isRead
      setMails((prev) => [...prev])
    })
  }

  function onCheckMail(mailId) {
    console.log('mailId:', mailId)
  }

  function onMailRemoved(mail) {
    eventBusService.emit('recount-mails', 'Trash')
    const mailId = mail.id

    if (mail.status === 'trash') {
      showSuccessMsg('Mail Moved to Trash')
      mailService.remove(mailId).catch((err) => {
        loadMails(filterBy)
        console.log('err onRemoveMail:', err)
      })
    } else {
      showSuccessMsg('Mail Removed')
      let prevMailStatus = mail.status
      mail.status = 'trash'
      mailService.save(mail).catch((mail) => {
        mail.status = prevMailStatus
        loadMails(filterBy)
      })
    }

    const updatedMails = mails.filter((mail) => mail.id !== mailId)
    setMails(updatedMails)
  }

  function draftMail(mail) {
    showSuccessMsg('Mail Saved to Draft')
    eventBusService.emit('recount-mails', 'Draft')
    mailService.save(mail).then(() => {
      loadMails(filterBy)
    })
  }

  function sendMail(mail) {
    showSuccessMsg('Mail Sent')
    eventBusService.emit('recount-mails', 'Sent')
    mail.status = 'sent'
    mailService.save(mail).then(() => {
      loadMails(filterBy)
    })
  }

  return (
    <PageLayout>
      <section className='mail-index app-container'>
        <MailCompose sendMail={sendMail} draftMail={draftMail} />
        {!mails || (!mails.length && <Loader />)}
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
    </PageLayout>
  )
}
