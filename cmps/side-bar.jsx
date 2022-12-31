import { SideBarMail } from '../apps/mail/cmps/side-bar-mail.jsx'
import { SideBarNote } from '../apps/note/cmps/side-bar-note.jsx'
import { eventBusService } from '../services/event-bus.service.js'

const { useParams, useLocation } = ReactRouterDOM
const { useState, useEffect, useRef } = React

export function SideBar() {
  // dynamic path
  const [sidebarLoc, setSidebarLoc] = useState('home')
  const location = useLocation()
  const params = useParams()

  // hover effect
  const [isOpen, setIsOpen] = useState(false)
  const [isStrictOpen, setIsStrictOpen] = useState(false)
  const elAside = useRef()
  const expandEventListener = useRef(() => {
    setIsOpen((prev) => !prev)
  })

  function x() {}

  useEffect(() => {
    eventBusService.on('expand-side-bar', (isStrictOpen) => {
      setIsStrictOpen(isStrictOpen)
      setIsOpen((prevOpen) => !prevOpen)
    })
  }, [])
  useEffect(() => {
    if (!isStrictOpen) {
      elAside.current.addEventListener('mouseenter', expandEventListener.current)
      elAside.current.addEventListener('mouseleave', expandEventListener.current)
    } else {
      elAside.current.removeEventListener('mouseenter', expandEventListener.current)
      elAside.current.removeEventListener('mouseleave', expandEventListener.current)
    }
  }, [isStrictOpen])
  useEffect(() => {
    setSidebarLoc(location.pathname)
  }, [location.pathname])

  function getHomeSideBar() {
    return (
      <nav className={`tools-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <div className='icon-label active'>
              <button className='btn-rnd-l'>
                <i className='fa-solid fa-house'></i>
              </button>
              {isOpen && 'Home'}
            </div>
          </li>
          <li>
            <div className='icon-label'>
              <button className='btn-rnd-l'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </button>
              {isOpen && 'Search'}
            </div>
          </li>
          <li>
            <div className='icon-label'>
              <button className='btn-rnd-l'>
                <i className='fa-solid fa-user'></i>
              </button>
              {isOpen && 'User'}
            </div>
          </li>
        </ul>
      </nav>
    )
  }

  function sidebarFor(isOpen) {
    if (sidebarLoc.includes('mail')) {
      return <SideBarMail isOpen={isOpen} />
    } else if (sidebarLoc.includes('note')) {
      return <SideBarNote isOpen={isOpen} />
    } else {
      return getHomeSideBar()
    }
  }

  return (
    <aside ref={elAside} className={`side-bar flex flex-column ${isOpen ? 'open' : ''}`}>
      {sidebarFor(isOpen)}
    </aside>
  )
}
