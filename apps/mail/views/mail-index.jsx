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
  const [isAllChecked, setIsAllChecked] = useState(undefined)
  const [isMultiChecked, setIsMultiChecked] = useState(undefined)
  const [searchParams] = useSearchParams()
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  const currCheckedIds = useRef([])

  useEffect(() => {
    loadMails(filterBy)
  }, [])

  useEffect(() => {
    loadMails(filterBy)
  }, [isMultiChecked])

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

  function onCheckMail(mailId, ev) {
    ev.stopPropagation()
    // not done yet
    setIsMarked(!isMarked)
    if (currCheckedIds.current.length >= 1) {
      setIsMultiChecked(true)
    }
    if (!currCheckedIds.current.includes(mailId)) {
      currCheckedIds.current.push(mailId)
    } else {
      const newChecked = currCheckedIds.current.filter((id) => id !== mailId)
      currCheckedIds.current = newChecked
    }
    console.log('currCheckedIds.current:', currCheckedIds.current)
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
    mail.status = 'draft'
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

  function onRemoveAll() {
    const updatedMails = mails.filter((mail) => !currCheckedIds.current.includes(mail.id))
    mailService.removeMultiple(currCheckedIds.current)
    setMails(updatedMails)
  }

  function handleAllMailsCheckbox(ev) {
    setIsAllChecked(!isAllChecked)
    if (!isAllChecked) {
      currCheckedIds.current = mails.map((mail) => mail.id)
    } else {
      currCheckedIds.current = []
    }
    console.log('currCheckedIds.current:', currCheckedIds.current)
  }
  // console.log('currCheckedIds.current:', currCheckedIds.current)

  return (
    <PageLayout>
      <section className='mail-index app-container'>
        <section className='mail-index-header flex align-center justify-between'>
          <div className='check-all'>
            <button className='btn-rnd-l'>
              <input
                defaultChecked={isMultiChecked}
                type='checkbox'
                name='checkAll'
                id='checkAll'
                onChange={(ev) => {
                  handleAllMailsCheckbox(ev)
                }}
              />
            </button>
          </div>
          {currCheckedIds.current.length > 1 && (
            <div className='all-mails-tools'>
              <button onClick={onRemoveAll} className='btn-rnd-l'>
                <i className='fa-solid fa-trash'></i>
              </button>
              <button className='btn-rnd-l'>
                <i className='fa-regular fa-envelope'></i>
              </button>
            </div>
          )}
        </section>
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
            isAllChecked={isAllChecked}
          />
        )}
      </section>
    </PageLayout>
  )
}
