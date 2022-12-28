import NotePreview from './note-preview.jsx'

export function NoteList({ notes }) {
    if (!notes || !notes.length) return ''
    return (
        <div className='note-list'>
            {notes.map(note => {
                return <NotePreview note={note} key={note.id} />
            })}
        </div>
    )
}
