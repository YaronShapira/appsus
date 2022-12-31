const { useEffect, useState, useRef } = React

import { eventBusService } from '../services/event-bus.service.js'
import { SearchHeader } from './search-header.jsx'

const { NavLink } = ReactRouterDOM

export function AppHeader() {
  const [isExpanded, setIsExpanded] = useState(false)

  function openSideBar() {
    setIsExpanded((prev) => !prev)
    eventBusService.emit('expand-side-bar', !isExpanded)
  }

  return (
    <header className='app-header'>
      <button className='btn-sidebar btn-rnd-l' onClick={openSideBar}>
        <i className='fa-solid fa-bars'></i>
      </button>
      <h3>Appsus</h3>
      <SearchHeader />
      <nav className='main-nav'>
        <ul className='nav-links clean-list flex align-center'>
          <li key={'home'}>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </li>
          <li key={'mail'}>
            <NavLink to='/mail' className='nav-link'>
              Maily
            </NavLink>
          </li>
          <li key={'note'}>
            <NavLink to='/note' className='nav-link'>
              Keepy
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
