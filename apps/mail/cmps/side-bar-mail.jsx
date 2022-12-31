import { mailService } from '../services/mail.service.js'

const { useState, useEffect, useRef } = React
const { useSearchParams, NavLink, useNavigate } = ReactRouterDOM

export function SideBarMail({ isOpen }) {
  const [searchParams] = useSearchParams()
  const folder = useRef('inbox')
  const isStars = useRef(searchParams.get('isStared') || false)
  const navigate = useNavigate()
  const [mailsCount, setMailsCount] = useState()
  useEffect(() => {
    if (searchParams.has('folder')) {
      folder.current = searchParams.get('folder')
    }
    loadMailsMap()
  }, [])

  function onStars() {
    isStars.current = true
    navigate({
      pathname: '/mail',
      search: `?q=${searchParams.get('q')}&isStared=true`,
    })
  }

  function onFolder(folderTo) {
    isStars.current = false
    folder.current = folderTo
    navigate({
      pathname: '/mail',
      search: `?q=${searchParams.get('q')}&folder=${folder.current}`,
    })
  }

  function loadMailsMap() {
    mailService.getMailsCountMap().then((map) => {
      console.log('map:', map)
    })
  }

  return (
    <nav className={`tools-nav ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <div
            onClick={() => {
              onFolder('inbox')
            }}
            className={`icon-label ${
              folder.current === 'inbox' && !isStars.current ? 'active' : ''
            }`}>
            <button className='btn-rnd-l'>
              <i className='fa-solid fa-inbox'></i>
            </button>
            {isOpen && 'Inbox'}
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              onStars('inbox')
            }}
            className={`icon-label ${isStars.current ? 'active' : ''}`}>
            <button className='btn-rnd-l'>
              <i className='fa-solid fa-star'></i>
            </button>
            {isOpen && 'Stared'}
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              onFolder('sent')
            }}
            className={`icon-label ${
              folder.current === 'sent' && !isStars.current ? 'active' : ''
            }`}>
            <button className='btn-rnd-l'>
              <i className='fa-regular fa-paper-plane'></i>
              {/* <span className='sidebar-item-txt'>Sent</span> */}
            </button>
            {isOpen && 'Sent'}
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              onFolder('draft')
            }}
            className={`icon-label ${
              folder.current === 'draft' && !isStars.current ? 'active' : ''
            }`}>
            <button className='btn-rnd-l'>
              <i className='fa-regular fa-clipboard'></i>
            </button>
            {isOpen && 'Draft'}
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              onFolder('trash')
            }}
            className={`icon-label ${folder.current === 'trash' && !isStars.current && 'active'}`}>
            <button className='btn-rnd-l'>
              <i className='fa-regular fa-trash-can'></i>
            </button>
            {isOpen && 'Trash'}
          </div>
        </li>
      </ul>
    </nav>
  )
}
