const { useState, useEffect, useRef } = React

import { mailService } from '../services/mail.service.js'

export function MailIndex() {
  const [mails, setMails] = useState(mailService.getDummyMails())

  console.log('mails:', mails)

  return (
    <section className='mail-index'>
      <h1>Welcome to mail index</h1>
    </section>
  )
}
