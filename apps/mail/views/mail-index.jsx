const { useState, useEffect, useRef } = React
const { useSearchParams } = ReactRouterDOM

import { PageLayout } from '../../../cmps/page-layout.jsx'
import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import Loader from '../../../cmps/loader.jsx'
import { mailService } from '../services/mail.service.js'

export function MailIndex() {
  const [isMarked, setIsMarked] = useState(false)
  const [mails, setMails] = useState([])
  const [searchParams] = useSearchParams()
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

  console.log('searchP STARED', searchParams.get('isStared'))
  console.log('searchP FOLDER', searchParams.get('folder'))
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
    setMails((prev) => [...prev])
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
    const mailId = mail.id

    if (mail.status === 'trash') {
      mailService.remove(mailId).catch((err) => {
        loadMails(filterBy)
        console.log('err onRemoveMail:', err)
      })
    } else {
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
    mailService.save(mail).then(() => {
      loadMails(filterBy)
    })
  }

  function sendMail(mail) {
    mail.status = 'send'
    mailService.save(mail).then(() => {
      loadMails(filterBy)
    })
  }

  return (
    <PageLayout>
      <section className='mail-index'>
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
