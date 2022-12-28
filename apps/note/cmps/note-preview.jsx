const { Fragment } = React
import AddNote from './add-note.jsx'
import NoteHoversBtns from './note-hovers-btns.jsx'

const { useState } = React

export default function NotePreview({ note, deleteNote, setNotes }) {
    const [isEditing, setIsEditing] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    function editNote() {
        console.log('F')
    }
    function onDeleteNote(ev, id) {
        ev.stopPropagation()
        deleteNote(note.id)
    }
    function onHover(ev) {
        // console.log('ENTERING', ev.target)
        setIsHovering(true)
    }
    function onHoverLeave(ev) {
        // console.log('LEAVING', ev.target)
        // ev.target.classList.add('fade-out')
        // setTimeout(() => setIsHovering(false), 500)
        setIsHovering(false)
    }

    switch (note.type) {
        case 'note-txt':
            return (
                <Fragment>
                    <article
                        className='note-preview'
                        onClick={() => setIsEditing(true)}
                        onMouseEnter={onHover}
                        onMouseLeave={onHoverLeave}>
                        <h6>{note.title}</h6>
                        <p>{note.info.txt}</p>
                        {isHovering && <NoteHoversBtns />}
                    </article>
                    {isEditing && (
                        <Fragment>
                            <div className='add-note-modal'>
                                <AddNote
                                    note={note}
                                    isEditing={true}
                                    setIsEditing={setIsEditing}
                                    setNotes={setNotes}
                                />
                            </div>
                            <div className='dark-overlay'></div>
                        </Fragment>
                    )}
                </Fragment>
            )
            break
        case 'note-img':
            return (
                <article className='note-preview'>
                    <img src={note.info.url} alt='' />
                    <h6>{note.title}</h6>
                    <p>{note.info.txt}</p>
                </article>
            )
            break
        case 'note-video':
            break
        case 'note-todos':
            break

        default:
            break
    }
    return (
        <article className='note-preview'>
            <h6>{note.title}</h6>
            <p>{note.info.txt}</p>
        </article>
    )
}
