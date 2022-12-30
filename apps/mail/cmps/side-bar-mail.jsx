const { useState, useEffect, useRef } = React
const { useSearchParams, NavLink, useNavigate } = ReactRouterDOM

export function SideBarMail({ isOpen }) {
    const [filterBy, setFilterBy] = useState('inbox')
    const [searchParams, setSearchParams] = useSearchParams()
    const folder = useRef('inbox')
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
            pathname: '/mail',
            search: `?q=${searchParams.get('q')}&folder=${folder.current}`,
        })
    }

    return (
        <nav className={`tools-nav ${isOpen ? 'open' : ''}`}>
            <ul>
                <li>
                    <div
                        onClick={() => {
                            onFolder('inbox')
                        }}
                        className={`icon-label ${folder.current === 'inbox' && 'active'}`}>
                        <div className='i-wrapper'>
                            <i className='fa-solid fa-inbox'></i>
                        </div>
                        <span className='sidebar-item-txt'>Inbox</span>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => {
                            onFolder('sent')
                        }}
                        className={`icon-label ${folder.current === 'sent' && 'active'}`}>
                        <div className='i-wrapper'>
                            <i className='fa-regular fa-paper-plane'></i>
                        </div>
                        <span className='sidebar-item-txt'>Sent</span>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => {
                            onFolder('draft')
                        }}
                        className={`icon-label ${folder.current === 'draft' && 'active'}`}>
                        <div className='i-wrapper'>
                            <i className='fa-regular fa-clipboard'></i>
                        </div>
                        <span className='sidebar-item-txt'>Draft</span>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => {
                            onFolder('trash')
                        }}
                        className={`icon-label ${folder.current === 'trash' && 'active'}`}>
                        <div className='i-wrapper'>
                            <i className='fa-regular fa-trash-can'></i>
                        </div>
                        <span className='sidebar-item-txt'>Trash</span>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
