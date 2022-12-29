const { Fragment } = React
import { noteService } from '../services/note.service.js'
import AddNote from './add-note.jsx'
import NoteHoversBtns from './note-hovers-btns.jsx'

const { useState, useRef } = React

export default function NotePreview({ note, deleteNote, setNotes }) {
    const [isEditing, setIsEditing] = useState(false)
    const noteArticleRef = useRef(null)

    function onDuplicateNote(ev) {
        ev.stopPropagation()
        const duplicatedNote = structuredClone(note)
        duplicatedNote.id = null

        noteService.saveNote(duplicatedNote).then(duplicatedNote => {
            setNotes(prevNotes => [duplicatedNote, ...prevNotes])
        })

        // noteService.saveNote(duplicatedNote).then(duplicatedNote => {
        //     setNotes(oldNotes => {
        //         const currNoteIdx = oldNotes.findIndex(currNote => currNote.id === note.id)
        //         oldNotes.splice(currNoteIdx + 1, 0, duplicatedNote)
        //         return [...oldNotes]
        //     })
        // })
    }
    function onDeleteNote(ev) {
        ev.stopPropagation()
        deleteNote(note.id)
    }

    // Solution for color palette not being on top of other cards. adding z-index
    function onHover(ev) {
        noteArticleRef.current.classList.add('z-2')
    }
    function onHoverLeave(ev) {
        noteArticleRef.current.classList.remove('z-2')
    }

    function saveNoteAndRender() {
        noteService.saveNote(note).then(updatedNewNote => {
            setNotes(oldNotes => {
                oldNotes[oldNotes.findIndex(note => note.id === updatedNewNote.id)] = updatedNewNote
                return [...oldNotes]
            })
        })
    }

    function setColor(ev, bgColor, color) {
        ev.stopPropagation()
        note.style = { ...note.style }
        note.style.backgroundColor = bgColor
        note.style.color = color
        saveNoteAndRender()
    }

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
                {<NoteHoversBtns onDeleteNote={onDeleteNote} setColor={setColor} onDuplicateNote={onDuplicateNote} />}
            </article>
            {isEditing && (
                <Fragment>
                    <div className='add-note-modal'>
                        <AddNote note={note} isEditing={true} setIsEditing={setIsEditing} setNotes={setNotes} />
                    </div>
                    <div className='dark-overlay'></div>
                </Fragment>
            )}
        </Fragment>
    )
}

// switch (note.type) {
//     case 'note-txt':
//         break
//     case 'note-img':
//         break
//     case 'note-video':
//         break
//     case 'note-todos':
//         break

//     default:
//         break
// }
