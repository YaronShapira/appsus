const { useEffect, useState, useRef } = React
const { Link, useParams, useNavigate } = ReactRouterDOM

import { utilService } from '../../../services/util.service.js'
import { mailService } from '../services/mail.service.js'

import { DetailsBody } from '../cmps/mail-details-cmps/details-body.jsx'
import { DetailsFooter } from '../cmps/mail-details-cmps/details-footer.jsx'
import { DetailsHeader } from '../cmps/mail-details-cmps/details-header.jsx'
import { PageLayout } from '../../../cmps/page-layout.jsx'

export function MailDetails() {
  const [mail, setMail] = useState(null)
  const [isReply, setReplyMode] = useState(false)
  const params = useParams()
  const navigate = useNavigate()
  const elMsgContainer = useRef()
  const elIframeForPrint = useRef()

  useEffect(() => {
    loadMail()
  }, [params.mailId])

  function onPrintMail(ev) {
    const iframe = elIframeForPrint.current.contentWindow
    iframe.document.open()
    iframe.document.write(elMsgContainer.current.innerHTML)
    iframe.document.close()
    iframe.focus()
    iframe.print()
  }

  function onReply() {
    setReplyMode(!isReply)
  }

  function onMailStarred(ev, mail) {
    ev.stopPropagation()
    mail.isStared = !mail.isStared
    mailService.save(mail).then((mail) => {
      loadMail()
    })
  }

  function loadMail() {
    mailService
      .get(params.mailId)
      .then((mail) => {
        setMail(mail)
      })
      .catch((err) => {
        console.log(err, ' had issue in MailDetails cmp')
        navigate('/mail')
      })
  }
  if (!mail)
    return (
      <PageLayout>
        <section>Loading...</section>
      </PageLayout>
    )
  return (
    <PageLayout>
      <section className='mail-details'>
        <nav className='mail-details-nav'>
          <ul className='tools-list'>
            <button
              onClick={() => {
                navigate('/mail')
              }}
              className='btn-rnd-l'>
              <i className='fa-solid fa-arrow-left'></i>
            </button>
          </ul>
        </nav>
        <div ref={elMsgContainer} className='msg-container'>
          <iframe ref={elIframeForPrint} className='ifm-content-toprint'></iframe>

          <DetailsHeader mail={mail} onPrintMail={onPrintMail} />
          <DetailsBody mail={mail} onMailStarred={onMailStarred} />
          <DetailsFooter mail={mail} onReply={onReply} />
        </div>
      </section>
    </PageLayout>
  )
}
