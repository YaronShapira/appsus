const { useState, useEffect } = React

import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'

import AddNote from '../cmps/add-note.jsx'
import { PageLayout } from '../../../cmps/page-layout.jsx'
import Loader from '../../../cmps/loader.jsx'

export function NoteIndex() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    setTimeout(() => {
      noteService.getNotes().then(setNotes)
    }, 1000)
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
