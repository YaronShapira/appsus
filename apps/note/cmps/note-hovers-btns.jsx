import NotePalette from './note-palette.jsx'

const { useState } = React

export default function NoteHoversBtns({ onDeleteNote, setColor, onDuplicateNote }) {
    const [isInPalette, setIsInPalette] = useState(false)

    function onPalette(ev) {
        ev.stopPropagation()
        setIsInPalette(prev => !prev)
    }

    return (
        <div className='hovers fade-in' onMouseLeave={() => setIsInPalette(false)}>
            <div className='select'>
                <button className='btn btn-rnd-s'>
                    <i className='fa-solid fa-check'></i>
                </button>
            </div>
            <div className='pin'>
                <button className='btn btn-rnd-l'>
                    <i className='fa-solid fa-thumbtack'></i>
                </button>
            </div>
            <div className='hover-utils'>
                <button className='btn btn-rnd-s' onClick={onPalette}>
                    <i className='fa-solid fa-palette'></i>
                </button>
                <NotePalette isInPalette={isInPalette} setColor={setColor} />

                <button className='btn btn-rnd-s'>
                    <i className='fa-solid fa-image'></i>
                </button>
                <button className='btn btn-rnd-s'>
                    <i className='fa-solid fa-envelope'></i>
                </button>
                <button className='btn btn-rnd-s'>
                    <i className='fa-solid fa-envelope'></i>
                </button>
                <button className='btn btn-rnd-s' onClick={e => onDuplicateNote(e)}>
                    <i className='fa-solid fa-copy'></i>
                </button>
                <button className='btn btn-rnd-s' onClick={e => onDeleteNote(e)}>
                    <i className='fa-solid fa-trash'></i>
                </button>
            </div>
        </div>
    )
}
