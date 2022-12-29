import { eventBusService } from '../../../services/event-bus.service.js'

export function SideBarMail({ isOpen }) {
  return (
    <nav className={`tools-nav ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <div className='icon-label active'>
            <i className='fa-solid fa-inbox'></i>
            <span className='sidebar-item-txt'>Inbox</span>
          </div>
        </li>
        <li>
          <div className='icon-label'>
            <i className='fa-regular fa-clipboard'></i>
            <span className='sidebar-item-txt'>Draft</span>
          </div>
        </li>
        <li>
          <div className='icon-label'>
            <i className='fa-regular fa-trash-can'></i>
            <span className='sidebar-item-txt'>Trash</span>
          </div>
        </li>
      </ul>
    </nav>
  )
}
