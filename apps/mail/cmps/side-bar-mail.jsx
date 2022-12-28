export function SideBarMail({ isOpen }) {
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
