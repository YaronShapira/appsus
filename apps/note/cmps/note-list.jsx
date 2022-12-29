const { Fragment } = React
import { utilService } from '../../../services/util.service.js'
import NotePreview from './note-preview.jsx'

export function NoteList({ notes, setNotes }) {
    if (!notes || !notes.length) return ''

    const pinnedNotes = notes.filter(note => note.isPinned)
    const unPinnedNotes = notes.filter(note => !note.isPinned)
    return (
        <div className='note-lists'>
            {pinnedNotes.length > 0 && (
                <Fragment>
                    <h6 className='list-title'>Pinned</h6>
                    <div className='note-list'>
                        {pinnedNotes.map(note => {
                            return (
                                <NotePreview
                                    note={note}
                                    key={note.id ? note.id : utilService.makeId()}
                                    setNotes={setNotes}
                                />
                            )
                        })}
                    </div>
                </Fragment>
            )}
            <h6 className='list-title'>{pinnedNotes.length > 0 && 'Others'}</h6>
            <div className='note-list'>
                {unPinnedNotes.map(note => {
                    return (
                        <NotePreview note={note} key={note.id ? note.id : utilService.makeId()} setNotes={setNotes} />
                    )
                })}
            </div>
        </div>
    )
}

// TODO: add pin func
// TODO: add image, video
