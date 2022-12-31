import { mailService } from '../services/mail.service.js'

const { useState, useEffect, useRef } = React
const { useSearchParams, NavLink, useNavigate } = ReactRouterDOM

export function SideBarMail({ isOpen }) {
  const [searchParams] = useSearchParams()
  const folder = useRef('inbox')
  const isStars = useRef(searchParams.get('isStared') || false)
  const navigate = useNavigate()
  const [mailsCount, setMailsCount] = useState({})
  const tools = ['Inbox', 'Stared', 'Sent', 'Draft', 'Trash']

  useEffect(() => {
    if (searchParams.has('folder')) {
      folder.current = searchParams.get('folder')
    }
    loadMailsMap()
  }, [])

  function loadMailsMap() {
    mailService.getMailsCountMap().then((map) => {
      setMailsCount(map)
    })
  }

  function onStars() {
    isStars.current = true
    navigate({
      pathname: '/mail',
      search: `?q=${searchParams.get('q')}&isStared=true`,
    })
  }

  function onFolder(folderTo) {
    isStars.current = false
    folder.current = folderTo
    navigate({
      pathname: '/mail',
      search: `?q=${searchParams.get('q')}&folder=${folder.current}`,
    })
  }
  console.log('mailsCount:', mailsCount)
  return (
    <nav className={`tools-nav ${isOpen ? 'open' : ''}`}>
      <ul>
        {tools.map((tool) => {
          const toolNameLower = tool.toLowerCase()
          return (
            <li key={toolNameLower}>
              <div
                onClick={() => {
                  toolNameLower === 'stared' ? onStars() : onFolder(toolNameLower)
                }}
                className={`icon-label ${
                  (folder.current === toolNameLower && !isStars.current) ||
                  (isStars.current && toolNameLower === 'stared')
                    ? 'active'
                    : ''
                }`}>
                <button className='btn-rnd-l'>
                  {toolNameLower === 'inbox' && <i className='fa-solid fa-inbox'></i>}
                  {toolNameLower === 'stared' && <i className='fa-solid fa-star'></i>}
                  {toolNameLower === 'sent' && <i className='fa-regular fa-paper-plane'></i>}
                  {toolNameLower === 'draft' && <i className='fa-regular fa-clipboard'></i>}
                  {toolNameLower === 'trash' && <i className='fa-regular fa-trash-can'></i>}
                </button>
                {isOpen && <span className='side-bar-label'>{tool}</span>}
                {isOpen && (
                  <div className='side-bar-label-count'>
                    <span>{mailsCount[tool]}</span>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
