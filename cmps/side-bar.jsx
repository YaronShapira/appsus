import { SideBarMail } from "../apps/mail/cmps/side-bar-mail.jsx"
import { SideBarNote } from "../apps/note/cmps/side-bar-note.jsx"

const { useParams, useLocation } = ReactRouterDOM
const { useState, useEffect } = React

export function SideBar() {
  const [sidebarLoc, setSidebarLoc] = useState("home")
  const location = useLocation()

  useEffect(() => {
    setSidebarLoc(location.pathname)
  }, [location.pathname])

  function getHomeSideBar() {
    return (
      <nav className='tools-nav'>
        <ul>
          <li>
            <div className='icon-label active'>
              <i className='fa-solid fa-house'></i>
              <span>Inbox</span>
            </div>
          </li>
          <li>
            <div className='icon-label'>
              <i className='fa-solid fa-magnifying-glass'></i>
              <span>Sent</span>
            </div>
          </li>
          <li>
            <div className='icon-label'>
              <i className='fa-solid fa-user'></i>
              <span>Trash</span>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
  function sidebarFor() {
    switch (location.pathname) {
      case "/note":
        return <SideBarNote />
      case "/mail":
        return <SideBarMail />
      default:
        return getHomeSideBar()
    }
  }

  return <aside className='side-bar flex flex-column'>{sidebarFor()}</aside>
}
