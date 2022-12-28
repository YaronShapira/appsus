import NotePreview from './note-preview.jsx'

export function NoteList({ notes }) {
    return (
        <div>
            {notes.map(note => {
                return <NotePreview note={note} key={note.id} />
            })}
        </div>
    )
}
