const { Fragment } = React
import { noteService } from '../services/note.service.js'
import AddNote from './add-note.jsx'
import ImgCmp from './img-cmp.jsx'
import NoteHoversBtns from './note-hovers-btns.jsx'
import NoteImg from './note-img.jsx'
import NoteTxt from './note-txt.jsx'
import NoteVideo from './note-video.jsx'
import VideoCmp from './video-cmp.jsx'

const { useState, useRef } = React

export default function NotePreview({ note, setNotes }) {
    const [currNote, setCurrNote] = useState(note)
    const [isEditing, setIsEditing] = useState(false)

    function onDuplicateNote(ev) {
        ev.stopPropagation()
        // const duplicatedNote = noteService.duplicateNote(note)
        const duplicatedNote = structuredClone(note)
        duplicatedNote.id = null

        noteService
            .saveNote(duplicatedNote)
            .then(newNote => (duplicatedNote.id = newNote.id))
            .catch(err => {
                console.log(err)
                setNotes(prevNotes => prevNotes.filter(currNote => currNote.id !== duplicatedNote.id))
            })
        setNotes(prevNotes => [duplicatedNote, ...prevNotes])
    }
    function onDeleteNote(ev) {
        ev.stopPropagation()
        const recoveryNote = structuredClone(note)
        noteService.deleteNote(note.id).catch(err => {
            console.log(err)
            setNotes(prevNotes => [...prevNotes, recoveryNote])
        })
        setNotes(prevNotes => prevNotes.filter(currNote => currNote.id !== note.id))
    }

    function onPin(ev) {
        ev.stopPropagation()
        note.isPinned = !note.isPinned
        noteService.saveNote(note).catch(() => {
            note.isPinned = !note.isPinned
            setNotes(prev => [...prev])
        })
        setNotes(prev => [...prev])
    }

    function saveNoteAndRender() {
        noteService.saveNote(note).then(updatedNewNote => {
            setNotes(oldNotes => {
                oldNotes[oldNotes.findIndex(note => note.id === updatedNewNote.id)] = updatedNewNote
                return [...oldNotes]
            })
        })
    }

    function renderNoteAndSave(recoveryNote) {
        noteService.saveNote(note).catch(err => {
            console.log(err)
            setNotes(oldNotes => {
                oldNotes[oldNotes.findIndex(currNote => currNote.id === note.id)] = recoveryNote
                return [...oldNotes]
            })
        })
        setNotes(oldNotes => {
            // oldNotes[oldNotes.findIndex(currNote => currNote.id === note.id)] = note
            return [...oldNotes]
        })
    }

    function setColor(ev, bgColor, color) {
        ev.stopPropagation()
        const recoveryNote = structuredClone(note)
        note.style = { ...note.style }
        note.style.backgroundColor = bgColor
        note.style.color = color
        setCurrNote({ ...note })
        // renderNoteAndSave(recoveryNote)
    }
    function DynamicNote(props) {
        console.log(note.type)
        switch (note.type) {
            case 'note-txt':
                return <NoteTxt {...props} />
            case 'note-img':
                return <NoteImg {...props} />
            case 'note-video':
                return <NoteVideo {...props} />
            case 'note-todos':
                break

            default:
                break
        }
    }

    if (note.audio) {
        console.log('TEST')
    }

    return (
        <Fragment>
            <DynamicNote
                note={note}
                setIsEditing={setIsEditing}
                onDeleteNote={onDeleteNote}
                setColor={setColor}
                onDuplicateNote={onDuplicateNote}
                onPin={onPin}
            />

            {/* <article style={note.style} className='note-preview' onClick={() => setIsEditing(true)}>
                {note.src && <ImgCmp src={note.src} />}
                {note.link && <VideoCmp link={note.link} />}
                <h5>{note.title}</h5>
                <p>{note.info.txt}</p>

                <NoteHoversBtns
                    onDeleteNote={onDeleteNote}
                    setColor={setColor}
                    onDuplicateNote={onDuplicateNote}
                    onPin={onPin}
                />
            </article> */}

            {isEditing && (
                <Fragment>
                    <div className='add-note-modal'>
                        <AddNote note={note} isEditing={true} setIsEditing={setIsEditing} setNotes={setNotes} />
                    </div>
                    <div className='dark-overlay'></div>
                </Fragment>
            )}
            {note.audio && <audio controls={true} src={note.audio}></audio>}
        </Fragment>
    )
}
