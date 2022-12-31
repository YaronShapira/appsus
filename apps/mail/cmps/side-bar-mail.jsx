import { mailService } from '../services/mail.service.js'

const { useState, useEffect, useRef } = React
const { useSearchParams, NavLink, useNavigate } = ReactRouterDOM

export function SideBarMail({ isOpen }) {
  const [searchParams] = useSearchParams()
  const folder = useRef('inbox')
  const isStars = useRef(searchParams.get('isStared') || false)
  const navigate = useNavigate()
  const [mailsCount, setMailsCount] = useState({})
  useEffect(() => {
    if (searchParams.has('folder')) {
      folder.current = searchParams.get('folder')
    }
    loadMailsMap()
  }, [])

  function loadMailsMap() {
    mailService.getMailsCountMap().then((map) => {
      setMailsCount(map)
    })
  }

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
  console.log('mailsCount:', mailsCount)
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
            {isOpen && <span className='side-bar-label'>Inbox</span>}
            {isOpen && (
              <div className='side-bar-label-count'>
                <span>{mailsCount['Inbox']}</span>
              </div>
            )}
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

            {isOpen && <span className='side-bar-label'>Stared</span>}
            {isOpen && (
              <div className='side-bar-label-count'>
                <span>{mailsCount['Stared']}</span>
              </div>
            )}
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
            {isOpen && <span className='side-bar-label'>Sent</span>}
            {isOpen && (
              <div className='side-bar-label-count'>
                <span>{mailsCount['Sent']}</span>
              </div>
            )}
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
            {isOpen && <span className='side-bar-label'>Draft</span>}
            {isOpen && (
              <div className='side-bar-label-count'>
                <span>{mailsCount['Draft']}</span>
              </div>
            )}
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
            {isOpen && <span className='side-bar-label'>Trash</span>}
            {isOpen && (
              <div className='side-bar-label-count'>
                <span>{mailsCount['Trash']}</span>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  )
}
