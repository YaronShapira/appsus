const { useState, useEffect } = React
const { useSearchParams, NavLink, useNavigate } = ReactRouterDOM
const { Fragment } = React

import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'

import AddNote from '../cmps/add-note.jsx'
import { PageLayout } from '../../../cmps/page-layout.jsx'
import Loader from '../../../cmps/loader.jsx'

export function NoteIndex() {
  const [notes, setNotes] = useState([])
  const [searchParams] = useSearchParams()
  const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

  function loadNotes() {
    console.log('LOADING NOTES')
    noteService.getNotes(filterBy).then(setNotes)
  }

  useEffect(() => {
    setTimeout(() => {
      loadNotes({
        ...filterBy,
        txt: searchParams.get('q') || '',
        status: searchParams.get('folder') || 'notes',
      })
    }, 10)
  }, [])

  useEffect(() => {
    setFilterBy((prevFilterBy) => {
      return {
        ...prevFilterBy,
        txt: searchParams.get('q') + '' || '',
        status: searchParams.get('folder') || 'notes',
      }
    })
  }, [searchParams])

  useEffect(() => {
    loadNotes(filterBy)
  }, [filterBy])

  return (
    <PageLayout>
      <div className='note-index app-container'>
        {!notes || (notes.length === 0 && <Loader />)}
        {notes && notes.length > 0 && (
          <Fragment>
            <AddNote setNotes={setNotes} />
            <NoteList notes={notes} setNotes={setNotes} />
          </Fragment>
        )}
      </div>
    </PageLayout>
  )
}
