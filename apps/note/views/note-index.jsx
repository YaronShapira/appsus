const { useState, useEffect } = React

import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'

import AddNote from '../cmps/add-note.jsx'

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    // console.log(notes)

    useEffect(() => {
        noteService.getNotes().then(setNotes)
    }, [])
    return (
        <div className='note-index'>
            <AddNote setNotes={setNotes} />
            <NoteList notes={notes} setNotes={setNotes} />
        </div>
    )
}
