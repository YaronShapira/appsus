const { useState, useEffect } = React

import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'

import AddNote from '../cmps/add-note.jsx'
import { PageLayout } from '../../../cmps/page-layout.jsx'

export function NoteIndex() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService.getNotes().then(setNotes)
  }, [])
  return (
    <PageLayout>
      <div className='note-index'>
        <AddNote setNotes={setNotes} />
        <NoteList notes={notes} setNotes={setNotes} />
      </div>
    </PageLayout>
  )
}
