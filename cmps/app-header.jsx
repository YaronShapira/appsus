const { useEffect, useState, useRef } = React

import { eventBusService } from '../services/event-bus.service.js'
import { SearchHeader } from './search-header.jsx'

const { NavLink } = ReactRouterDOM

export function AppHeader() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    function openSideBar() {
        setIsExpanded(prev => !prev)
        eventBusService.emit('expand-side-bar', !isExpanded)
    }

    function onHamburger(ev) {
        ev.stopPropagation()
        setIsHamburgerOpen(prev => !prev)

        document.addEventListener('mousedown', removeHamburger)
    }

    function removeHamburger() {
        setTimeout(() => setIsHamburgerOpen(prev => !prev), 100)
        document.removeEventListener('mousedown', removeHamburger)
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
                    <li key={'note'}>
                        <NavLink to='https://boydem.github.io/Miss-book/#/book' className='nav-link'>
                            Booky
                        </NavLink>
                    </li>
                </ul>
                <div className='btn hamburger-nav' onClick={onHamburger}>
                    <i className='fa-solid fa-bars'></i>
                    {isHamburgerOpen && (
                        <div className='hamburger-nav-open'>
                            <ul>
                                <li>
                                    <button className='btn btn-rnd-l'>
                                        {/* <span>Booky</span> */}
                                        <i className='fa-solid fa-book fa-3x'></i>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn btn-rnd-l'>
                                        {/* <span>Keepy</span> */}
                                        <i className='fa-solid fa-note-sticky fa-3x'></i>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn btn-rnd-l'>
                                        {/* <span>Maily</span> */}
                                        <i className='fa-regular fa-envelope fa-3x'></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
