const { useState, useEffect } = React

import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'

import AddNote from '../cmps/add-note.jsx'

export function NoteIndex() {
    const [notes, setNotes] = useState([])

    function deleteNote(id) {
        noteService.deleteNote(id).then(() => {
            setNotes(notes.filter(note => note.id !== id))
        })
    }

    useEffect(() => {
        noteService.getNotes().then(setNotes)
    }, [])
    return (
        <div className='note-index'>
            <AddNote setNotes={setNotes} />
            <NoteList notes={notes} deleteNote={deleteNote} />
        </div>
    )
}

// TODO LIST
// add search icon to navbar
// add hover state to cards and implement delete (CRUD)
//
