export default function NoteHoversBtns({ note, deleteNote }) {
    return (
        <div className='hovers fade-in'>
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
                <button className='btn btn-rnd-s' onClick={e => deleteNote(e, note.id)}>
                    <i className='fa-solid fa-trash'></i>
                </button>
                <button className='btn btn-rnd-s'>
                    <i className='fa-solid fa-palette'></i>
                </button>
                <button className='btn btn-rnd-s'>
                    <i className='fa-solid fa-image'></i>
                </button>
                <button className='btn btn-rnd-s'>
                    <i className='fa-solid fa-envelope'></i>
                </button>
                <button className='btn btn-rnd-s'>
                    <i className='fa-solid fa-envelope'></i>
                </button>
                <button className='btn btn-rnd-s'>
                    <i className='fa-solid fa-envelope'></i>
                </button>
            </div>
        </div>
    )
}
