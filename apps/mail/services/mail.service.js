import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAILS_DB = 'mailsDB'
const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
}

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

_createMails()

function getDummyMails() {
  return [
    {
      id: 'e101',
      sender: 'noyem',
      from: 'noyemdahan@gmail.com',
      subject: 'אישור תשלום חשבון חשמל ',
      body: `אישור תשלום לחברת החשמל
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident modi dicta ea voluptates aliquam labore, dolor sint quod soluta minus quos possimus beatae esse maiores sit fugit minima pariatur maxime amet iusto omnis veritatis accusantium rem numquam. Similique harum dolore tenetur tempore asperiores aperiam maxime ex exercitationem distinctio! Dolores, sapiente dolorum possimus ut illo iste, enim dolore, quasi quibusdam dignissimos praesentium quam voluptate? Nihil quisquam praesentium quo recusandae laborum in fuga natus adipisci quibusdam impedit sunt officiis iste facere, itaque excepturi voluptas molestiae. Cum commodi esse veniam enim, suscipit, sunt ducimus recusandae totam ab, consectetur magnam reprehenderit molestias quaerat doloremque temporibus magni dolores perspiciatis odit earum nihil expedita voluptas! Minus perspiciatis ipsa veniam eos, aperiam laudantium sapiente non excepturi, perferendis, nobis cum voluptatum. Vel reiciendis numquam voluptas debitis adipisci laboriosam eum aliquam earum dolorem perferendis molestiae consectetur assumenda quaerat reprehenderit, dolores eligendi suscipit omnis quod iure maxime tempore aut saepe recusandae! Architecto, earum voluptate numquam quia consequatur non est illo dolorem recusandae omnis praesentium corrupti exercitationem error ut quasi deserunt iusto, dicta voluptatem eos corporis itaque ipsum. Vitae, dolorem maiores! Voluptatum eius eveniet corporis officia culpa ratione temporibus! Mollitia, magni iste veniam error voluptas non libero consectetur laudantium voluptatibus? Suscipit.`,
      isRead: false,
      sentAt: 1551133930594,
      to: loggedinUser.email,
      isStared: true,
      status: 'inbox',
    },
    {
      id: 'e102',
      sender: 'HEVER WebMaster',
      from: 'notifications@github.com',
      subject: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      body: `
      <small>Coding academy Nov22</small>
      <h3>Dear Lorem, </h3>
      <img src="https://www.logodesign.net/assets/images/new-ui/logo-category-abstract-logo.png" alt="logo" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident modi dicta ea voluptates aliquam labore, dolor sint quod soluta minus quos possimus beatae esse maiores sit fugit minima pariatur maxime amet iusto omnis veritatis accusantium rem numquam. Similique harum dolore tenetur tempore asperiores aperiam maxime ex exercitationem distinctio! Dolores, sapiente dolorum possimus ut illo iste, enim dolore, quasi quibusdam dignissimos praesentium quam voluptate? Nihil quisquam praesentium quo recusandae laborum in fuga natus adipisci quibusdam impedit sunt officiis iste facere, itaque excepturi voluptas molestiae. Cum commodi esse veniam enim, suscipit, sunt ducimus recusandae totam ab, consectetur magnam reprehenderit molestias quaerat doloremque temporibus magni dolores perspiciatis odit earum nihil expedita voluptas! Minus perspiciatis ipsa veniam eos, aperiam laudantium sapiente non excepturi, perferendis, nobis cum voluptatum. Vel reiciendis numquam voluptas debitis adipisci laboriosam eum aliquam earum dolorem perferendis molestiae consectetur assumenda quaerat reprehenderit, dolores eligendi suscipit omnis quod iure maxime tempore aut saepe recusandae! Architecto, earum voluptate numquam quia consequatur non est illo dolorem recusandae omnis praesentium corrupti exercitationem error ut quasi deserunt iusto, dicta voluptatem eos corporis itaque ipsum. Vitae, dolorem maiores! Voluptatum eius eveniet corporis officia culpa ratione temporibus! Mollitia, magni iste veniam error voluptas non libero consectetur laudantium voluptatibus? Suscipit.`,
      isRead: true,
      sentAt: 1551133930456,
      to: loggedinUser.email,
      isStared: false,
      status: 'inbox',
    },
    {
      id: 'e103',
      sender: `Iced Tea Aesthetics`,
      from: 'info@icedtea-aesthetics.com',
      subject: `[YaronShapira/appsus] Run : pages build and deployment - Sprint3 ()`,
      body: `
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident modi dicta ea voluptates aliquam labore, dolor sint quod soluta minus quos possimus beatae esse maiores sit fugit minima pariatur maxime amet iusto omnis veritatis accusantium rem numquam. Similique harum dolore tenetur tempore asperiores aperiam maxime ex exercitationem distinctio! Dolores, sapiente dolorum possimus ut illo iste, enim dolore, quasi quibusdam dignissimos praesentium quam voluptate? Nihil quisquam praesentium quo recusandae laborum in fuga natus adipisci quibusdam impedit sunt officiis iste facere, itaque excepturi voluptas molestiae. Cum commodi esse veniam enim, suscipit, sunt ducimus recusandae totam ab, consectetur magnam reprehenderit molestias quaerat doloremque temporibus magni dolores perspiciatis odit earum nihil expedita voluptas! Minus perspiciatis ipsa veniam eos, aperiam laudantium sapiente non excepturi, perferendis, nobis cum voluptatum. Vel reiciendis numquam voluptas debitis adipisci laboriosam eum aliquam earum dolorem perferendis molestiae consectetur assumenda quaerat reprehenderit, dolores eligendi suscipit omnis quod iure maxime tempore aut saepe recusandae! Architecto, earum voluptate numquam quia consequatur non est illo dolorem recusandae omnis praesentium corrupti exercitationem error ut quasi deserunt iusto, dicta voluptatem eos corporis itaque ipsum. Vitae, dolorem maiores! Voluptatum eius eveniet corporis officia culpa ratione temporibus! Mollitia, magni iste veniam error voluptas non libero consectetur laudantium voluptatibus? Suscipit.`,
      isRead: false,
      sentAt: 1551133912344,
      to: loggedinUser.email,
      isStared: false,
      status: 'inbox',
    },
    {
      id: 'e104',
      sender: 'Dropbox',
      from: 'noyemdahan@gmail.com',
      subject: `Tommy and 39 others made changes in your shared folders
      `,
      body: `Activity in Shared Folders
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident modi dicta ea voluptates aliquam labore, dolor sint quod soluta minus quos possimus beatae esse maiores sit fugit minima pariatur maxime amet iusto omnis veritatis accusantium rem numquam. Similique harum dolore tenetur tempore asperiores aperiam maxime ex exercitationem distinctio! Dolores, sapiente dolorum possimus ut illo iste, enim dolore, quasi quibusdam dignissimos praesentium quam voluptate? Nihil quisquam praesentium quo recusandae laborum in fuga natus adipisci quibusdam impedit sunt officiis iste facere, itaque excepturi voluptas molestiae. Cum commodi esse veniam enim, suscipit, sunt ducimus recusandae totam ab, consectetur magnam reprehenderit molestias quaerat doloremque temporibus magni dolores perspiciatis odit earum nihil expedita voluptas! Minus perspiciatis ipsa veniam eos, aperiam laudantium sapiente non excepturi, perferendis, nobis cum voluptatum. Vel reiciendis numquam voluptas debitis adipisci laboriosam eum aliquam earum dolorem perferendis molestiae consectetur assumenda quaerat reprehenderit, dolores eligendi suscipit omnis quod iure maxime tempore aut saepe recusandae! Architecto, earum voluptate numquam quia consequatur non est illo dolorem recusandae omnis praesentium corrupti exercitationem error ut quasi deserunt iusto, dicta voluptatem eos corporis itaque ipsum. Vitae, dolorem maiores! Voluptatum eius eveniet corporis officia culpa ratione temporibus! Mollitia, magni iste veniam error voluptas non libero consectetur laudantium voluptatibus? Suscipit.`,
      isRead: false,
      sentAt: Date.now() - 90000,
      to: loggedinUser.email,
      isStared: true,
      status: 'inbox',
    },
    {
      id: 'e105',
      sender: 'Github',
      from: 'notifications@github.com',
      subject: `Tommy and 39 others made changes in your shared folders
      `,
      body: `Activity in Shared Folders
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident modi dicta ea voluptates aliquam labore, dolor sint quod soluta minus quos possimus beatae esse maiores sit fugit minima pariatur maxime amet iusto omnis veritatis accusantium rem numquam. Similique harum dolore tenetur tempore asperiores aperiam maxime ex exercitationem distinctio! Dolores, sapiente dolorum possimus ut illo iste, enim dolore, quasi quibusdam dignissimos praesentium quam voluptate? Nihil quisquam praesentium quo recusandae laborum in fuga natus adipisci quibusdam impedit sunt officiis iste facere, itaque excepturi voluptas molestiae. Cum commodi esse veniam enim, suscipit, sunt ducimus recusandae totam ab, consectetur magnam reprehenderit molestias quaerat doloremque temporibus magni dolores perspiciatis odit earum nihil expedita voluptas! Minus perspiciatis ipsa veniam eos, aperiam laudantium sapiente non excepturi, perferendis, nobis cum voluptatum. Vel reiciendis numquam voluptas debitis adipisci laboriosam eum aliquam earum dolorem perferendis molestiae consectetur assumenda quaerat reprehenderit, dolores eligendi suscipit omnis quod iure maxime tempore aut saepe recusandae! Architecto, earum voluptate numquam quia consequatur non est illo dolorem recusandae omnis praesentium corrupti exercitationem error ut quasi deserunt iusto, dicta voluptatem eos corporis itaque ipsum. Vitae, dolorem maiores! Voluptatum eius eveniet corporis officia culpa ratione temporibus! Mollitia, magni iste veniam error voluptas non libero consectetur laudantium voluptatibus? Suscipit.`,
      isRead: false,
      sentAt: Date.now() - 20000,
      to: loggedinUser.email,
      isStared: true,
      status: 'inbox',
    },
    {
      id: 'e106',
      sender: 'LinkedIn',
      from: 'updates-noreply@linkedin.com',
      subject: `It gives us so much pleasure to introduce this week's star. 💖

      ⭐ Guy Greenshtein ⭐ is a Hybrid Cloud ☁ PS Manager under the ICT Unit of Commit . Guy joined us in 2014 after a 6-year military service in a classified technological unit (honorably discharged as Captain).
       
      What do you do in your job?
      "I always laugh when I hear this question because the first thing that comes to mind is, "what not." Even today, most of my family and friends don’t fully understand what I’m doing - some think I’m an assassin due to my constant travels, while others say that I’m “always flying to Singapore and making much money” 😉
      As a Hybrid Cloud PS Manager, I’m responsible for Commit’s advisory, delivery, and support operations provided to our customers, both on-site and remotely (In Israel and abroad). Unlike other companies where you have multiple representatives facing the customer, my engagement begins in the pre-sale stage and continues throughout the whole life cycle of the project until a successful delivery and usually beyond it. 
      My weekly routine includes traveling between customers, whether in a role of a trusted advisor or ICT architect. I love to get my hands dirty from time to time, so don’t be surprised if you find me performing HO activities."

      `,
      body: `Activity in Shared Folders
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident modi dicta ea voluptates aliquam labore, dolor sint quod soluta minus quos possimus beatae esse maiores sit fugit minima pariatur maxime amet iusto omnis veritatis accusantium rem numquam. Similique harum dolore tenetur tempore asperiores aperiam maxime ex exercitationem distinctio! Dolores, sapiente dolorum possimus ut illo iste, enim dolore, quasi quibusdam dignissimos praesentium quam voluptate? Nihil quisquam praesentium quo recusandae laborum in fuga natus adipisci quibusdam impedit sunt officiis iste facere, itaque excepturi voluptas molestiae. Cum commodi esse veniam enim, suscipit, sunt ducimus recusandae totam ab, consectetur magnam reprehenderit molestias quaerat doloremque temporibus magni dolores perspiciatis odit earum nihil expedita voluptas! Minus perspiciatis ipsa veniam eos, aperiam laudantium sapiente non excepturi, perferendis, nobis cum voluptatum. Vel reiciendis numquam voluptas debitis adipisci laboriosam eum aliquam earum dolorem perferendis molestiae consectetur assumenda quaerat reprehenderit, dolores eligendi suscipit omnis quod iure maxime tempore aut saepe recusandae! Architecto, earum voluptate numquam quia consequatur non est illo dolorem recusandae omnis praesentium corrupti exercitationem error ut quasi deserunt iusto, dicta voluptatem eos corporis itaque ipsum. Vitae, dolorem maiores! Voluptatum eius eveniet corporis officia culpa ratione temporibus! Mollitia, magni iste veniam error voluptas non libero consectetur laudantium voluptatibus? Suscipit.`,
      isRead: false,
      sentAt: Date.now() - 5000,
      to: loggedinUser.email,
      isStared: true,
      status: 'inbox',
    },
    {
      id: 'e107',
      sender: 'The Open University',
      from: 'noyemdahan@gmail.com',
      subject: `אירועי חודש ינואר 2023 באוניברסיטה הפתוחה

      `,
      body: `
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident modi dicta ea voluptates aliquam labore, dolor sint quod soluta minus quos possimus beatae esse maiores sit fugit minima pariatur maxime amet iusto omnis veritatis accusantium rem numquam. Similique harum dolore tenetur tempore asperiores aperiam maxime ex exercitationem distinctio! Dolores, sapiente dolorum possimus ut illo iste, enim dolore, quasi quibusdam dignissimos praesentium quam voluptate? Nihil quisquam praesentium quo recusandae laborum in fuga natus adipisci quibusdam impedit sunt officiis iste facere, itaque excepturi voluptas molestiae. Cum commodi esse veniam enim, suscipit, sunt ducimus recusandae totam ab, consectetur magnam reprehenderit molestias quaerat doloremque temporibus magni dolores perspiciatis odit earum nihil expedita voluptas! Minus perspiciatis ipsa veniam eos, aperiam laudantium sapiente non excepturi, perferendis, nobis cum voluptatum. Vel reiciendis numquam voluptas debitis adipisci laboriosam eum aliquam earum dolorem perferendis molestiae consectetur assumenda quaerat reprehenderit, dolores eligendi suscipit omnis quod iure maxime tempore aut saepe recusandae! Architecto, earum voluptate numquam quia consequatur non est illo dolorem recusandae omnis praesentium corrupti exercitationem error ut quasi deserunt iusto, dicta voluptatem eos corporis itaque ipsum. Vitae, dolorem maiores! Voluptatum eius eveniet corporis officia culpa ratione temporibus! Mollitia, magni iste veniam error voluptas non libero consectetur laudantium voluptatibus? Suscipit.`,
      isRead: false,
      sentAt: Date.now() - 15000,
      to: loggedinUser.email,
      isStared: true,
      status: 'inbox',
    },
  ]
}

function getEmptyMail() {
  return {
    to: '',
    subject: '',
    body: '',
    from: loggedinUser.email,
    sender: loggedinUser.fullname,
    isStared: false,
    isRead: false,
  }
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

function getDefaultFilter() {
  return { txt: '', status: 'inbox' }
}

function getDefaultSort() {
  return { sentAt: 1, isRead: false, isStared: false }
}

function query(filterBy = getDefaultFilter(), sortBy = getDefaultSort()) {
  return storageService.query(MAILS_DB).then((mails) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      mails = mails.filter(
        (mail) => regex.test(mail.subject) || regex.test(mail.sender) || regex.test(mail.body)
      )
    }
    if (filterBy.status) {
      mails = mails.filter((mail) => mail.status === filterBy.status)
    }
    const sortedByTime = mails.sort((a, b) => {
      return (b.sentAt - a.sentAt) * sortBy.sentAt
    })
    if (sortBy.isStared) {
      return sortedByTime.sort((a, b) => {
        return a.isStared === b.isStared ? 0 : a.isStared ? -1 : 1
      })
    } else if (sortBy.isRead) {
      return sortedByTime.sort((a, b) => {
        return a.isRead === b.isRead ? 0 : a.isRead ? -1 : 1
      })
    } else {
      return sortedByTime
    }
  })
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
    mail.sentAt = Date.now()
    return storageService.post(MAILS_DB, mail)
  }
}

function _createMails() {
  let mails = utilService.loadFromStorage(MAILS_DB)
  if (!mails || !mails.length) {
    mails = getDummyMails()
    utilService.saveToStorage(MAILS_DB, mails)
  }
}
