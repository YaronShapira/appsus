export default function NotePreview({ note, deleteNote }) {
    switch (note.type) {
        case 'note-txt':
            return (
                <article className='note-preview'>
                    <h6>{note.title}</h6>
                    <p>{note.info.txt}</p>
                    <button className='btn btn-primary' onClick={() => deleteNote(note.id)}>
                        DELETE
                    </button>
                </article>
            )
            break
        case 'note-img':
            return (
                <article className='note-preview'>
                    <img src={note.info.url} alt='' />
                    <h6>{note.title}</h6>
                    <p>{note.info.txt}</p>
                </article>
            )
            break
        case 'note-video':
            break
        case 'note-todos':
            break

        default:
            break
    }
    return (
        <article className='note-preview'>
            <h6>{note.title}</h6>
            <p>{note.info.txt}</p>
        </article>
    )
}
