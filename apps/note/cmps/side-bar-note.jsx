const { useState, useEffect, useRef } = React
const { useSearchParams, NavLink, useNavigate } = ReactRouterDOM

export function SideBarNote({ isOpen }) {
  const [filterBy, setFilterBy] = useState('notes')
  const [searchParams, setSearchParams] = useSearchParams()
  const folder = useRef('notes')
  const navigate = useNavigate()

  useEffect(() => {
    if (searchParams.has('folder')) {
      setFilterBy(searchParams.get('folder'))
      folder.current = searchParams.get('folder')
    }
  }, [])

  function onFolder(folderTo) {
    folder.current = folderTo
    navigate({
      pathname: '/note',
      search: `?q=${searchParams.get('q')}&folder=${folder.current}`,
    })
  }

  return (
    <nav className={`tools-nav ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <div
            onClick={() => {
              onFolder('notes')
            }}
            className={`icon-label ${folder.current === 'notes' && 'active'}`}>
            <button className='btn-rnd-l'>
              <i className='fa-solid fa-lightbulb'></i>
            </button>
            {isOpen && 'Notes'}
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              onFolder('archive')
            }}
            className={`icon-label ${folder.current === 'archive' && 'active'}`}>
            <button className='btn-rnd-l'>
              <i className='fa-solid fa-box-archive'></i>
            </button>
            {isOpen && 'Archive'}
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              onFolder('trash')
            }}
            className={`icon-label ${folder.current === 'trash' && 'active'}`}>
            <button className='btn-rnd-l'>
              <i className='fa-regular fa-trash-can'></i>
            </button>
            {isOpen && 'Trash'}
          </div>
        </li>
      </ul>
    </nav>
  )
}
