const { useState, useEffect } = React

import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'

import AddNote from '../cmps/add-note.jsx'

export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        noteService.getNotes().then(setNotes)
    }, [])
    console.log(notes)
    return (
        <div>
            <AddNote />
            <NoteList notes={notes} />
        </div>
    )
}

// TODO LIST
// add search icon to navbar
//
