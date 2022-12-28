const { Fragment } = React
import AddNote from './add-note.jsx'

const { useState } = React

export default function NotePreview({ note, deleteNote, setNotes }) {
    const [isEditing, setIsEditing] = useState(false)
    function editNote() {
        console.log('F')
    }
    switch (note.type) {
        case 'note-txt':
            return (
                <Fragment>
                    <article className='note-preview' onClick={() => setIsEditing(true)}>
                        <h6>{note.title}</h6>
                        <p>{note.info.txt}</p>
                        <button className='btn btn-primary' onClick={() => deleteNote(note.id)}>
                            DELETE
                        </button>
                    </article>
                    {isEditing && (
                        <Fragment>
                            <div className='add-note-modal'>
                                <AddNote
                                    note={note}
                                    isEditing={true}
                                    setIsEditing={setIsEditing}
                                    setNotes={setNotes}
                                />
                            </div>
                            <div className='dark-overlay'></div>
                        </Fragment>
                    )}
                </Fragment>
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
