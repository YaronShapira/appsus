import { eventBusService } from '../../../services/event-bus.service.js'

const { useState, useEffect } = React
const { useSearchParams, NavLink } = ReactRouterDOM

export function SideBarMail({ isOpen }) {
  const [filterBy, setFilterBy] = useState({ filter: 'inbox' })
  const [searchParams, setSearchParams] = useSearchParams()

  function onFolder(folder) {
    setSearchParams([...searchParams.entries(), ['folder', 2]])
  }

  useEffect(() => {
    console.log('searchParams:', searchParams.get('q'))
    // setSearchParams({ ...searchParams.get('q'), filter: 'inbox' })
  }, [])

  function handleFilter(filter) {
    let { value } = filter
    setFilterBy((prevFilter) => ({ ...prevFilter, filter: value }))
    setSearchParams({ q: filter.value })
  }

  return (
    <nav className={`tools-nav ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <div
            onClick={() => {
              onFolder('inbox')
            }}
            className='icon-label active'>
            {/* <NavLink
              to={`/mail?${
                searchParams.get('q') ? 'q=' + searchParams.get('q') + '&inbox' : 'inbox'
              }`}>
              <i className='fa-solid fa-inbox'></i>
              <span className='sidebar-item-txt'>Inbox</span>
            </NavLink> */}
            <i className='fa-solid fa-inbox'></i>
            <span className='sidebar-item-txt'>Inbox</span>
          </div>
        </li>
        <li>
          <div className='icon-label'>
            <NavLink to='/mail/draft'>
              <i className='fa-regular fa-clipboard'></i>
              <span className='sidebar-item-txt'>Draft</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className='icon-label'>
            <NavLink to='/mail/trash'>
              <i className='fa-regular fa-trash-can'></i>
              <span className='sidebar-item-txt'>Trash</span>
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  )
}
