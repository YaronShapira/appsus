import { eventBusService } from '../../../services/event-bus.service.js'

const { useState, useEffect, useRef } = React
const { useSearchParams, NavLink, useNavigate } = ReactRouterDOM

export function SideBarMail({ isOpen }) {
  // const [filterBy, setFilterBy] = useState()
  const [searchParams, setSearchParams] = useSearchParams()
  const folder = useRef('inbox')
  const navigate = useNavigate()

  useEffect(() => {
    if (searchParams.has('folder')) {
      folder.current = searchParams.get('folder')
    }
  }, [])

  function onFolder(folderTo) {
    navigate('/mail')
    folder.current = folderTo
    searchParams.set('folder', folder.current)
    setSearchParams([...searchParams.entries()])
  }

  return (
    <nav className={`tools-nav ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <div
            onClick={() => {
              onFolder('inbox')
            }}
            className={`icon-label ${folder.current === 'inbox' && 'active'}`}>
            <i className='fa-solid fa-inbox'></i>
            <span className='sidebar-item-txt'>Inbox</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              onFolder('sent')
            }}
            className={`icon-label ${folder.current === 'sent' && 'active'}`}>
            <i className='fa-regular fa-paper-plane'></i>
            <span className='sidebar-item-txt'>Sent</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              onFolder('draft')
            }}
            className={`icon-label ${folder.current === 'draft' && 'active'}`}>
            <i className='fa-regular fa-clipboard'></i>
            <span className='sidebar-item-txt'>Draft</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              onFolder('trash')
            }}
            className={`icon-label ${folder.current === 'trash' && 'active'}`}>
            <i className='fa-regular fa-trash-can'></i>
            <span className='sidebar-item-txt'>Trash</span>
          </div>
        </li>
      </ul>
    </nav>
  )
}
