const { NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header className='app-header full main-layout'>
      <div className='container flex justify-between align-center'>
        <h3>Appsus</h3>
        <nav className='main-nav'>
          <ul className='nav-links clean-list flex align-center'>
            <li key={"home"}>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
            <li key={"mail"}>
              <NavLink to='/mail' className='nav-link'>
                Maily
              </NavLink>
            </li>
            <li key={"notes"}>
              <NavLink to='/notes' className='nav-link'>
                Keepy
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
