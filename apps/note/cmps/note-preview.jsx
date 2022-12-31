const { Fragment } = React
import Loader from '../../../cmps/loader.jsx'
import { showSuccessMsg } from '../../../services/event-bus.service.js'
import { noteService } from '../services/note.service.js'
import AddNote from './add-note.jsx'
import ImgCmp from './img-cmp.jsx'
import NoteCanvas from './note-canvas.jsx'
import NoteHoversBtns from './note-hovers-btns.jsx'
import NoteImg from './note-img.jsx'
import NoteMap from './note-map.jsx'
import NoteRecording from './note-recording.jsx'
import NoteTodos from './note-todos.jsx'
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
        showSuccessMsg('Note Duplicated Successfully')
    }
    function onDeleteNote(ev) {
        ev.stopPropagation()
        const recoveryNote = structuredClone(note)
        if (note.status !== 'trash') {
            note.status = 'trash'
            note.isPinned = false
            renderNoteAndSave(recoveryNote)
            setNotes(prevNotes => prevNotes.filter(currNote => currNote.id !== note.id))
            showSuccessMsg('Note Moved To Trash Successfully')
            return
        }
        noteService.deleteNote(note.id).catch(err => {
            console.log(err)
            setNotes(prevNotes => [...prevNotes, recoveryNote])
        })
        setNotes(prevNotes => prevNotes.filter(currNote => currNote.id !== note.id))
        showSuccessMsg('Note Deleted Successfully')
    }

    function onPin(ev) {
        ev.stopPropagation()
        note.isPinned = !note.isPinned
        noteService.saveNote(note).catch(() => {
            note.isPinned = !note.isPinned
            setNotes(prev => [...prev])
        })
        setNotes(prev => [...prev])
        showSuccessMsg(`Note ${note.isPinned ? 'Pinned' : 'Unpinned'} Successfully`)
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
            // oldNotes[oldNotes.findIndex(currNote => currNote.id === note.id)] = structuredClone(note)
            return [...oldNotes]
        })
    }

    function onArchive(ev) {
        ev.stopPropagation()
        const recoveryNote = structuredClone(note)
        if (note.status === 'archive') note.status = 'notes'
        else note.status = 'archive'
        renderNoteAndSave(recoveryNote)
        setNotes(prevNotes => prevNotes.filter(currNote => currNote.id !== note.id))
        showSuccessMsg('Note Archived Successfully')
    }

    function setColor(ev, bgColor, color) {
        ev.stopPropagation()
        const recoveryNote = structuredClone(note)
        note.style = { ...note.style }
        note.style.backgroundColor = bgColor
        note.style.color = color
        // setCurrNote({ ...note })
        renderNoteAndSave(recoveryNote)
        showSuccessMsg('Changed Color Successfully')
    }
    function DynamicNote(props) {
        switch (note.type) {
            case 'note-txt':
                return <NoteTxt {...props} />
            case 'note-img':
                return <NoteImg {...props} />
            case 'note-video':
                return <NoteVideo {...props} />
            case 'note-todo':
                return <NoteTodos {...props} />
            case 'note-recording':
            case 'note-audio':
                return <NoteRecording {...props} />
            case 'note-map':
                return <NoteMap {...props} />
            case 'note-canvas':
                return <NoteCanvas {...props} />
            default:
                console.log('Dynamic Note Problem')
                break
        }
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
                onArchive={onArchive}
            />

            {isEditing && <AddNote note={note} isEditing={true} setIsEditing={setIsEditing} setNotes={setNotes} />}
        </Fragment>
    )
}

{
    /* <article style={note.style} className='note-preview' onClick={() => setIsEditing(true)}>
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
            </article> */
}
