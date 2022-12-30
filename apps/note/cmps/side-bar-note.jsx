const { useState, useEffect, useRef } = React
const { useSearchParams, NavLink, useNavigate } = ReactRouterDOM

export function SideBarNote({ isOpen }) {
    const [filterBy, setFilterBy] = useState('notes')
    const [searchParams, setSearchParams] = useSearchParams()
    const folder = useRef('notes')

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
                            onFolder('notes')
                        }}
                        className={`icon-label ${folder.current === 'notes' && 'active'}`}>
                        <div className='i-wrapper'>
                            <i className='fa-solid fa-lightbulb'></i>
                        </div>
                        <span className='sidebar-item-txt'>Notes</span>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => {
                            onFolder('archive')
                        }}
                        className={`icon-label ${folder.current === 'archive' && 'active'}`}>
                        <div className='i-wrapper'>
                            <i className='fa-solid fa-box-archive'></i>
                        </div>
                        <span className='sidebar-item-txt'>Archive</span>
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
