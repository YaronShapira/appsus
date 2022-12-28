export function SideBar() {
  return (
    <aside className='side-bar flex flex-column'>
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
    </aside>
  )
}
