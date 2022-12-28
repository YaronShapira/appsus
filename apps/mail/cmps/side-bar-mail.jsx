export function SideBarMail() {
  return (
    <nav className='tools-nav'>
      <ul>
        <li>
          <div className='icon-label active'>
            <i className='fa-solid fa-house'></i>
            <span>Mail</span>
          </div>
        </li>
        <li>
          <div className='icon-label'>
            <i className='fa-solid fa-magnifying-glass'></i>
            <span>Add</span>
          </div>
        </li>
        <li>
          <div className='icon-label'>
            <i className='fa-solid fa-user'></i>
            <span>Remove</span>
          </div>
        </li>
      </ul>
    </nav>
  )
}
