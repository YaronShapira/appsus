const { useEffect, useState, useRef } = React
const { Link, useParams, useNavigate, useSearchParams } = ReactRouterDOM

import { DetailsBody } from '../cmps/mail-details-cmps/details-body.jsx'
import { DetailsFooter } from '../cmps/mail-details-cmps/details-footer.jsx'
import { DetailsHeader } from '../cmps/mail-details-cmps/details-header.jsx'
import { mailService } from '../services/mail.service.js'

export function DetailsPreview({ mail, display }) {
  const [isReply, setReplyMode] = useState(false)
  const elMsgContainer = useRef()
  const elIframeForPrint = useRef()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isMailStared, setIsMailStared] = useState(false)
  useEffect(() => {
    if (mail) {
      mail.isStared && setIsMailStared(true)
    }
    return () => {
      setIsMailStared(false)
    }
  }, [])

  function onMailStarred(ev, mail) {
    ev.stopPropagation()
    mail.isStared = !mail.isStared
    mailService.save(mail).catch((err) => [console.log('had issue with starring the mail:', err)])
    setIsMailStared((prev) => !prev)
  }

  function moveToFullMode() {
    navigate({
      pathname: `/mail/${mail.id}`,
      search: `?q=${searchParams.get('q')}&folder=${mail.status}`,
    })
  }

  function fullModeTopBar() {
    return (
      <nav className='mail-details-nav'>
        <ul className='tools-list'>
          <button
            onClick={() => {
              navigate({
                pathname: `/mail`,
                search: `?q=${searchParams.get('q')}&folder=${mail.status}`,
              })
            }}
            className='btn-rnd-l'>
            <i className='fa-solid fa-arrow-left'></i>
          </button>
        </ul>
      </nav>
    )
  }

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

  return (
    <section className={`mail-details-preview ${display === 'full' && 'app-container'}`}>
      <section className='msg-container'>
        <iframe ref={elIframeForPrint} className='ifm-content-toprint'></iframe>
        {display === 'full' && fullModeTopBar()}
        <DetailsHeader
          mail={mail}
          onPrintMail={onPrintMail}
          display={display}
          moveToFullMode={moveToFullMode}
        />
        <DetailsBody
          elMsgContainer={elMsgContainer}
          mail={mail}
          isMailStared={isMailStared}
          onMailStarred={onMailStarred}
        />
        <DetailsFooter mail={mail} onReply={onReply} />
      </section>
    </section>
  )
}
