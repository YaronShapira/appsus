import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import NotePalette from './note-palette.jsx'

const { useState, useRef, Fragment } = React

export default function NoteHoversBtns({ onDeleteNote, setColor, onDuplicateNote, onPin, onArchive }) {
    const [isInPalette, setIsInPalette] = useState(false)
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const hamburgerMenuRef = useRef(null)

    function onPalette(ev) {
        ev.stopPropagation()
        setIsInPalette(prev => !prev)
        console.log('TEST')
    }

    function onHamburger(ev) {
        ev.stopPropagation()
        setIsHamburgerOpen(prev => !prev)

        document.addEventListener('mousedown', removeHamburger)
    }

    function removeHamburger() {
        setTimeout(() => setIsHamburgerOpen(prev => !prev), 100)
        console.log('REMOVING')
        document.removeEventListener('mousedown', removeHamburger)
    }

    return (
        <Fragment>
            <button className='btn mobile-hamburger btn-rnd-s' onClick={onHamburger}>
                <i className='fa-solid fa-ellipsis-vertical'></i>
            </button>
            {isHamburgerOpen && (
                <div className='mobile-hamburger-menu' onClick={e => e.stopPropagation()} ref={hamburgerMenuRef}>
                    <ul>
                        <li onClick={onPin}>
                            <button>Pin Note</button>
                        </li>
                        <li onClick={onPalette}>
                            <button>Change Color</button>
                        </li>
                        <li onClick={() => showErrorMsg('This Feature Is Unavailable At This Time')}>
                            <button>Send As Mail</button>
                        </li>
                        <li onClick={onArchive}>
                            <button>Archive Note</button>
                        </li>
                        <li onClick={e => onDuplicateNote(e)}>
                            <button>Duplicate Note</button>
                        </li>
                        <li onClick={e => onDeleteNote(e)}>
                            <button>Delete Note</button>
                        </li>
                    </ul>
                </div>
            )}
            <div className='hovers' onMouseLeave={() => setIsInPalette(false)} onClick={e => e.stopPropagation()}>
                <div className='select'>
                    <button
                        className='btn btn-rnd-s'
                        onClick={() => showErrorMsg('This Feature Is Unavailable At This Time')}>
                        <i className='fa-solid fa-check'></i>
                    </button>
                </div>
                <div className='pin'>
                    <button className='btn btn-rnd-l' onClick={onPin}>
                        <i className='fa-solid fa-thumbtack'></i>
                    </button>
                </div>
                <div className='hover-utils'>
                    <button className='btn btn-rnd-s' onClick={onPalette}>
                        <i className='fa-solid fa-palette'></i>
                    </button>
                    <NotePalette isInPalette={isInPalette} setColor={setColor} />
                    <button
                        className='btn btn-rnd-s'
                        onClick={() => showErrorMsg('This Feature Is Unavailable At This Time')}>
                        <i className='fa-solid fa-envelope'></i>
                    </button>
                    <button className='btn btn-rnd-s' onClick={onArchive}>
                        <i className='fa-solid fa-box-archive'></i>
                    </button>
                    <button className='btn btn-rnd-s' onClick={e => onDuplicateNote(e)}>
                        <i className='fa-solid fa-copy'></i>
                    </button>
                    <button className='btn btn-rnd-s' onClick={e => onDeleteNote(e)}>
                        <i className='fa-solid fa-trash'></i>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
