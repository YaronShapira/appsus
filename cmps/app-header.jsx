const { useEffect, useState, useRef } = React

import { eventBusService } from '../services/event-bus.service.js'
import { SearchHeader } from './search-header.jsx'

const { NavLink, useNavigate } = ReactRouterDOM

export function AppHeader() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isAppsNavOpen, setIsAppsNavOpen] = useState(false)
    const elAppsNavNavWrapper = useRef()
    const navigate = useNavigate()

    function openSideBar() {
        setIsExpanded(prev => !prev)
        eventBusService.emit('expand-side-bar', !isExpanded)
    }

    function onAppsNav(ev) {
        setIsAppsNavOpen(prev => !prev)
        document.addEventListener('ondown', removeAppsNav)
    }

    function removeAppsNav(ev) {
        console.log('ev.target.parentNode:', ev.target.parentNode)
        if (ev.target.parentNode !== elAppsNavNavWrapper.current) {
            setIsAppsNavOpen(prev => !prev)
            document.removeEventListener('ondown', removeAppsNav)
        }
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
                    <li key={'book'}>
                        <a href='https://boydem.github.io/Miss-book/#/book' target='_blank' className='nav-link'>
                            Booky
                        </a>
                    </li>
                    <li>
                        <img src='assets\imgs\profile-avatar.svg' alt='' className='profile-img' />
                    </li>
                </ul>
                <div ref={elAppsNavNavWrapper} className='btn apps-nav-wrapper' onClick={onAppsNav}>
                    <i className='fa-solid fa-bars'></i>

                    <div className={`apps-nav ${isAppsNavOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <a
                                    className='btn btn-rnd-l'
                                    target='_blank'
                                    href='https://boydem.github.io/Miss-book/#/book'>
                                    {/* <span>Booky</span> */}
                                    <i className='fa-solid fa-book'></i>
                                </a>
                            </li>
                            <li>
                                <button className='btn btn-rnd-l' onClick={() => navigate('/note')}>
                                    {/* <span>Keepy</span> */}
                                    <i className='fa-solid fa-note-sticky'></i>
                                </button>
                            </li>
                            <li>
                                <button className='btn btn-rnd-l' onClick={() => navigate('/mail')}>
                                    {/* <span>Maily</span> */}
                                    <i className='fa-regular fa-envelope'></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
