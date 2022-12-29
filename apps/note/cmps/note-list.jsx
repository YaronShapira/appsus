const { Fragment } = React
import NotePreview from './note-preview.jsx'

export function NoteList({ notes, deleteNote, setNotes }) {
    if (!notes || !notes.length) return ''

    const pinnedNotes = notes.filter(note => note.isPinned)
    const unPinnedNotes = notes.filter(note => !note.isPinned)
    return (
        <div className='note-lists'>
            <h6 className='list-title'>Pinned</h6>
            <div className='note-list'>
                {pinnedNotes.map(note => {
                    return <NotePreview note={note} key={note.id} deleteNote={deleteNote} setNotes={setNotes} />
                })}
            </div>
            <h6 className='list-title'>Others</h6>
            <div className='note-list'>
                {unPinnedNotes.map(note => {
                    return <NotePreview note={note} key={note.id} deleteNote={deleteNote} setNotes={setNotes} />
                })}
            </div>
        </div>
    )
}

// TODO: add pin func
// TODO: add image, video
