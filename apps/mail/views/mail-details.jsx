const { useEffect, useState, useRef } = React
const { Link, useParams, useNavigate } = ReactRouterDOM

import { utilService } from '../../../services/util.service.js'
import { mailService } from '../services/mail.service.js'

export function MailDetails() {
  const params = useParams()
  const navigate = useNavigate()

  return (
    <section className='mail-details'>
      <h3>Mail in params : {params.mailId}</h3>
    </section>
  )
}
