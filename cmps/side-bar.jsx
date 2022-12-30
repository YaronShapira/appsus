import { SideBarMail } from '../apps/mail/cmps/side-bar-mail.jsx'
import { SideBarNote } from '../apps/note/cmps/side-bar-note.jsx'

const { useParams, useLocation } = ReactRouterDOM
const { useState, useEffect, useRef } = React

export function SideBar() {
  // dynamic path
  const [sidebarLoc, setSidebarLoc] = useState('home')
  const location = useLocation()
  const params = useParams()

  // hover effect
  const [isOpen, setIsOpen] = useState(false)
  const elAside = useRef()
  useEffect(() => {
    elAside.current.addEventListener('mouseenter', () => {
      setIsOpen(true)
    })
    elAside.current.addEventListener('mouseleave', () => {
      setIsOpen(false)
    })
  }, [])

  useEffect(() => {
    setSidebarLoc(location.pathname)
  }, [location.pathname])

  function getHomeSideBar() {
    return (
      <nav className={`tools-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <div className='icon-label active'>
              <i className='fa-solid fa-house'></i>
              <span className='sidebar-item-txt'>Mail</span>
            </div>
          </li>
          <li>
            <div className='icon-label'>
              <i className='fa-solid fa-magnifying-glass'></i>
              <span className='sidebar-item-txt'>Add</span>
            </div>
          </li>
          <li>
            <div className='icon-label'>
              <i className='fa-solid fa-user'></i>
              <span className='sidebar-item-txt'>Remove</span>
            </div>
          </li>
        </ul>
      </nav>
    )
  }

  function sidebarFor(isOpen) {
    console.log('sidebarLoc:', sidebarLoc)
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
