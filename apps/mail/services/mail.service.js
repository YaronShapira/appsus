import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAILS_DB = 'mailsDB'

export const mailService = {
  query, // List
  get, // Read
  remove, // Delete
  save, // Update/Create
  getDefaultFilter,
  getEmptyMail,
  getNextMail,
  getDummyMails,
}

function getDummyMails() {
  return [
    {
      id: 'e101',
      subject: 'Miss you Momo!',
      body: 'Would love to catch up sometimes',
      isRead: false,
      sentAt: 1551133930594,
      to: 'momo@momo.com',
    },
    {
      id: 'e102',
      subject: 'Beat you Lomo!',
      body: 'Would love to catch up sometimes',
      isRead: true,
      sentAt: 1551133930456,
      to: 'lolo@lolo.com',
    },
    {
      id: 'e103',
      subject: 'Love you Komo!',
      body: 'Would love to catch up sometimes',
      isRead: false,
      sentAt: 1551133912344,
      to: 'koko@koko.com',
    },
    {
      id: 'e104',
      subject: 'Hate you Pomo!',
      body: 'Would love to catch up sometimes',
      isRead: false,
      sentAt: 1551234930594,
      to: 'popo@popo.com',
    },
  ]
}

function getNextMail(direction, currMailId) {
  direction = direction === 'next' ? +1 : -1
  return query(MAILS_DB).then((mails) => {
    const currMailIdx = mails.findIndex((book) => currMailId === book.id)
    if (mails.length - 1 < currMailIdx) return mails[0]
    else if (currMailIdx === 0) return mails[mails.length - 1]
    return mails[currMailIdx + direction]
  })
}

function getCriteria() {
  return {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'], // has any of the labels
  }
}

function getEmptyMail() {
  return {
    subject: '',
    body: '',
    to: '',
  }
}

function getDefaultFilter() {
  return { title: '', isSent: false }
}

function query(filterBy = getDefaultFilter()) {
  return storageService.query(MAILS_DB).then((mails) => mails)
}

function get(mailId) {
  return storageService.get(MAILS_DB, mailId)
}

function remove(mailId) {
  return storageService.remove(MAILS_DB, mailId)
}

function save(mail) {
  if (mail.id) {
    return storageService.put(MAILS_DB, mail)
  } else {
    return storageService.post(MAILS_DB, mail)
  }
}

function _createMails() {
  return [
    {
      id: 'e101',
      subject: 'Miss you Momo!',
      body: 'Would love to catch up sometimes',
      isRead: false,
      sentAt: 1551133930594,
      to: 'momo@momo.com',
    },
    {
      id: 'e102',
      subject: 'Beat you Lomo!',
      body: 'Would love to catch up sometimes',
      isRead: true,
      sentAt: 1551133930456,
      to: 'lolo@lolo.com',
    },
    {
      id: 'e103',
      subject: 'Love you Komo!',
      body: 'Would love to catch up sometimes',
      isRead: false,
      sentAt: 1551133912344,
      to: 'koko@koko.com',
    },
    {
      id: 'e104',
      subject: 'Hate you Pomo!',
      body: 'Would love to catch up sometimes',
      isRead: false,
      sentAt: 1551234930594,
      to: 'popo@popo.com',
    },
  ]
}

function _createMails() {
  let mails = utilService.loadFromStorage(MAILS_DB)
  if (!mails || !mails.length) {
    mails = _createMails()
    utilService.saveToStorage(MAILS_DB, mails)
  }
  console.log('Got this mails...', mails)
}
