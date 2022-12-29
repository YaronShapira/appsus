const { useState, useEffect, useRef } = React

import { noteService } from '../services/note.service.js'

export default function AddNote({ note, setNotes, isEditing, setIsEditing }) {
    const [addNodeParams, setAddNodeParams] = useState(
        structuredClone(note) || noteService.getDefaultNote()
    )
    const [isWriting, setIsWriting] = useState(isEditing || false)
    const addNoteBoxRef = useRef(null)

    useOutsideAlerter(addNoteBoxRef)
    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value
        if (target.id === 'txt') {
            return setAddNodeParams(prev => {
                prev.info.txt = value
                return { ...prev }
            })
        }
        setAddNodeParams(prev => {
            return { ...prev, [field]: value }
        })
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            // Alert if clicked on outside of element
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    clearSlate()
                    if (isEditing) setIsEditing(false)
                }
            }

            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }, [ref])
    }

    function clearSlate() {
        setIsWriting(false)
        setAddNodeParams(noteService.getDefaultNote())
    }

    function addNote() {
        clearSlate()
        if (isEditing) setIsEditing(false)

        noteService.saveNote(addNodeParams).then(newNote => {
            if (!isEditing) return setNotes(prev => [newNote, ...prev])
            setNotes(oldNotes => {
                oldNotes[oldNotes.findIndex(note => note.id === newNote.id)] = newNote
                return [...oldNotes]
            })
        })
    }

    return (
        <div className='add-note' ref={addNoteBoxRef}>
            {isWriting && (
                <input
                    type='title'
                    placeholder='Title'
                    id='title'
                    name='title'
                    value={addNodeParams.title}
                    onChange={handleChange}
                />
            )}
            <div className='main-input'>
                <input
                    type='title'
                    placeholder='Take a note...'
                    id='txt'
                    name='txt'
                    value={addNodeParams.info.txt}
                    onChange={handleChange}
                    onClick={() => setIsWriting(true)}
                />
                {!isWriting && (
                    <div className='inline-utils'>
                        <button className='btn btn-rnd-s'>
                            <i className='fa-solid fa-pencil'></i>
                        </button>
                        <button className='btn btn-rnd-s'>
                            <i className='fa-solid fa-palette'></i>
                        </button>
                        <button className='btn btn-rnd-s'>
                            <i className='fa-solid fa-image'></i>
                        </button>
                    </div>
                )}
            </div>
            {isWriting && (
                <div className='utils'>
                    <div className='btns'>
                        <button className='btn btn-rnd-s'>
                            <i className='fa-solid fa-pencil'></i>
                        </button>
                        <button className='btn btn-rnd-s'>
                            <i className='fa-solid fa-palette'></i>
                        </button>
                        <button className='btn btn-rnd-s'>
                            <i className='fa-solid fa-location-dot'></i>
                        </button>
                    </div>
                    <button className='btn add-btn btn-primary' onClick={addNote}>
                        Save
                    </button>
                </div>
            )}
        </div>
    )
}
