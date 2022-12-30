const { useState, useEffect } = React

import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'

import AddNote from '../cmps/add-note.jsx'
import { PageLayout } from '../../../cmps/page-layout.jsx'
import Loader from '../../../cmps/loader.jsx'
const { Fragment } = React

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
