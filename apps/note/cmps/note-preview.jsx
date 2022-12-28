export default function NotePreview({ note }) {
    return (
        <div className='note-preview-wrapper'>
            <div className='note-preview'>
                <h6>{note.title}</h6>
                <p>{note.info.txt}</p>
            </div>
        </div>
    )
}
