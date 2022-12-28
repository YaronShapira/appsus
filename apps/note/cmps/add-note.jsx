const { useState, useEffect, useRef } = React

import { noteService } from '../services/note.service.js'

export default function AddNote({ setNotes }) {
    const [addNodeParams, setAddNodeParams] = useState(noteService.getDefaultNote())
    const [isWriting, setIsWriting] = useState(false)
    const inputRef = useRef(null)
    useOutsideAlerter(inputRef)
    // console.log(addNodeParams)

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
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsWriting(false)
                    setAddNodeParams(noteService.getDefaultNote())
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

    function addNote() {
        noteService.saveNote(addNodeParams).then(newNote => {
            setNotes(prev => [newNote, ...prev])
        })
    }

    return (
        <div className='add-note' ref={inputRef}>
            {isWriting && (
                <input
                    type='title'
                    placeholder='Title'
                    id='title'
                    name='title'
                    value={addNodeParams.txt}
                    onChange={handleChange}
                />
            )}
            <input
                type='text'
                placeholder='Take a note...'
                id='txt'
                name='txt'
                value={addNodeParams.txt}
                onChange={handleChange}
                onClick={() => setIsWriting(true)}
            />
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
                        Add
                    </button>
                </div>
            )}
        </div>
    )
}
