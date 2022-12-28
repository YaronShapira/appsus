const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export default function AddNote({ setNotes }) {
    const [addNodeParams, setAddNodeParams] = useState(noteService.getDefaultNote())
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

    function addNote() {
        noteService.saveNote(addNodeParams).then(newNote => {
            setNotes(prev => [...prev, newNote])
        })
    }

    return (
        <div className='add-note'>
            <input
                type='text'
                placeholder='Take a note...'
                id='txt'
                name='txt'
                value={addNodeParams.txt}
                onChange={handleChange}
            />
            <button onClick={addNote}>Add</button>
        </div>
    )
}
