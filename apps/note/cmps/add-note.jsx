const { useState, useEffect, useRef } = React

import { noteService } from '../services/note.service.js'
import loadImageFromInput from '../services/upload.service.js'

export default function AddNote({ note, setNotes, isEditing, setIsEditing }) {
    const [addNodeParams, setAddNodeParams] = useState(structuredClone(note) || noteService.getDefaultNote())
    const [isWriting, setIsWriting] = useState(isEditing || false)
    const addNoteBoxRef = useRef(null)
    const uploadImgInputRef = useRef(null)
    const mainTextAreaRef = useRef(null)

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

    function updateParamsSrc(img) {
        addNodeParams.src = img.src
        addNodeParams.type = 'note-img'
        setAddNodeParams({ ...addNodeParams })
    }

    function onUploadImg(ev) {
        loadImageFromInput(ev, updateParamsSrc)
        setIsWriting(true)
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
        mainTextAreaRef.current.placeholder = 'Take a note...'
        mainTextAreaRef.current.name = 'txt'
        mainTextAreaRef.current.id = 'txt'
    }

    function onYoutube() {
        setIsWriting(true)
        mainTextAreaRef.current.focus()
        mainTextAreaRef.current.placeholder = 'Enter a Youtube Link...'
        mainTextAreaRef.current.name = 'link'
        mainTextAreaRef.current.id = 'link'
    }

    function onToDoList() {
        console.log('TODO')
        setIsWriting(true)
        mainTextAreaRef.current.focus()
    }

    function addNote() {
        clearSlate()
        if (isEditing) setIsEditing(false)

        const newNote = structuredClone(addNodeParams)

        noteService
            .saveNote(addNodeParams)
            .then(newNoteFromDB => {
                newNote.id = newNoteFromDB.id
                setNotes(prev => [...prev])
                console.log('?')
            })
            .catch(err => {
                console.log(err)
                setNotes(noteService.getNotes())
            })
        if (!isEditing) {
            return setNotes(prev => [newNote, ...prev])
        }
        setNotes(oldNotes => {
            oldNotes[oldNotes.findIndex(note => note.id === newNote.id)] = newNote
            return [...oldNotes]
        })
    }

    return (
        <div className='add-note' ref={addNoteBoxRef}>
            {addNodeParams.src && <img src={addNodeParams.src} />}
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
                <textarea
                    type='title'
                    placeholder='Take a note...'
                    id='txt'
                    name='txt'
                    rows={isEditing ? 3 : isWriting ? 2 : 1}
                    value={addNodeParams.info.txt || addNodeParams.link}
                    onChange={handleChange}
                    onClick={() => setIsWriting(true)}
                    ref={mainTextAreaRef}
                />
                {!isWriting && (
                    <div className='inline-utils'>
                        <button className='btn btn-rnd-s'>
                            <i className='fa-solid fa-list' onClick={onToDoList}></i>
                        </button>
                        <button className='btn btn-rnd-s'>
                            <i className='fa-solid fa-palette'></i>
                        </button>
                        <button className='btn btn-rnd-s' onClick={onYoutube}>
                            <i className='fa-brands fa-youtube'></i>
                        </button>
                        <button className='btn btn-rnd-s' onClick={() => uploadImgInputRef.current.click()}>
                            <i className='fa-solid fa-image'></i>
                        </button>
                        <input
                            type='file'
                            className='file-input btn'
                            name='image'
                            id='image'
                            hidden
                            ref={uploadImgInputRef}
                            onChange={onUploadImg}
                        />
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
