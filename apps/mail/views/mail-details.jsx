const { useEffect, useState, useRef } = React
const { Link, useParams, useNavigate, useSearchParams } = ReactRouterDOM

import { mailService } from '../services/mail.service.js'

import { PageLayout } from '../../../cmps/page-layout.jsx'
import Loader from '../../../cmps/loader.jsx'
import { DetailsPreview } from './details-preview.jsx'

export function MailDetails() {
  const [mail, setMail] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadMail()
  }, [params.mailId])

  function loadContent() {
    if (!mail) {
      return (
        <section className='mail-details'>
          <Loader />
        </section>
      )
    } else {
      return <DetailsPreview mail={mail} display={'full'} />
    }
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
  return <PageLayout>{loadContent()}</PageLayout>
}
