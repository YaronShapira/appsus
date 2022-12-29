const { useEffect, useState, useRef } = React
const { Link, useParams, useNavigate } = ReactRouterDOM

import { utilService } from '../../../services/util.service.js'
import { mailService } from '../services/mail.service.js'

export function MailDetails() {
  const params = useParams()
  const navigate = useNavigate()

  return (
    <section className='mail-details'>
      <nav className='mail-details-nav'>
        <ul className='tools-list'>
          <button className='btn-rnd-l'>
            <i className='fa-solid fa-arrow-left'></i>
          </button>
        </ul>
      </nav>
      <section className='mail-details-header flex align-center justify-between'>
        <h2>
          Mail in params : {params.mailId}
          <span className='tag'>Incoming</span>
        </h2>
        <div className='mail-details-header-actions'>
          <button
            onClick={() => {
              onMailStarred(mail)
            }}
            className='btn-rnd-l'>
            <i className='fa-solid fa-print'></i>
          </button>
        </div>
      </section>
      <section className='mail-msg'>
        <div className='mail-msg-header flex align-center justify-between'>
          <div className='sender-details'>
            <div className='user-avatar'>
              <i className='fa-solid fa-user'></i>
            </div>
            <div className='user-details-txt'>
              <h5>Boydem</h5>
              <small>{`<notifications@github.com>`}</small>
            </div>
          </div>
          <div className='sender-info-actions flex align-center justify-between'>
            <h6 className='mail-time'>28 Dec 2022, 22:57 (14 hours ago)</h6>
            <button
              onClick={() => {
                onMailStarred(mail)
              }}
              className='btn-rnd-l-s'>
              <i className='fa-solid fa-star'></i>
            </button>
          </div>
        </div>
        <div className='mail-msg-body'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non debitis nobis
            aspernatur placeat unde officiis obcaecati consequuntur illo quae temporibus ipsam fuga
            minus, excepturi corrupti nemo? Molestiae, eveniet veritatis.
          </p>
        </div>
      </section>
      <section className='mail-details-footer'>
        <div className='mail-footer-actions'>
          <button className='btn-primary'>Reply</button>
          <button className='btn-primary'>Move</button>
        </div>
      </section>
    </section>
  )
}
