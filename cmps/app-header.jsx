import { SearchHeader } from './search-header.jsx'

const { NavLink } = ReactRouterDOM

export function AppHeader() {
    return (
        <header className='app-header'>
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
