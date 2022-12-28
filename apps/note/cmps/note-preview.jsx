const { Fragment } = React
import { noteService } from '../services/note.service.js'
import AddNote from './add-note.jsx'
import NoteHoversBtns from './note-hovers-btns.jsx'

const { useState, useRef } = React

export default function NotePreview({ note, deleteNote, setNotes }) {
    const [isEditing, setIsEditing] = useState(false)
    const [isInPalette, setIsInPalette] = useState(false)
    const noteArticleRef = useRef(null)

    function onDeleteNote(ev) {
        ev.stopPropagation()
        deleteNote(note.id)
    }
    function onHover(ev) {
        noteArticleRef.current.classList.add('z-2')
    }
    function onHoverLeave(ev) {
        noteArticleRef.current.classList.remove('z-2')
    }
    function setColor(ev, color) {
        ev.stopPropagation()
        note.style = { ...note.style }
        note.style.backgroundColor = color
        noteService.saveNote(note).then(newNote => {
            setNotes(oldNotes => {
                oldNotes[oldNotes.findIndex(note => note.id === newNote.id)] = newNote
                return [...oldNotes]
            })
        })
    }
    switch (note.type) {
        case 'note-txt':
            return (
                <Fragment>
                    <article
                        style={note.style}
                        ref={noteArticleRef}
                        className='note-preview'
                        onClick={() => setIsEditing(true)}
                        onMouseEnter={onHover}
                        onMouseLeave={onHoverLeave}>
                        <h5>{note.title}</h5>
                        <p>{note.info.txt}</p>
                        {<NoteHoversBtns deleteNote={onDeleteNote} setColor={setColor} />}
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
