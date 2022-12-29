const { useState, useEffect, useRef } = React

import { noteService } from '../services/note.service.js'
import { recordAudio } from '../services/record.service.js'
import loadImageFromInput from '../services/upload.service.js'

export default function AddNote({ note, setNotes, isEditing, setIsEditing }) {
    const [addNoteParams, setAddNoteParams] = useState(structuredClone(note) || noteService.getDefaultNote())
    const [isWriting, setIsWriting] = useState(isEditing || false)
    const [isRecording, setIsRecording] = useState(false)
    const addNoteBoxRef = useRef(null)
    const uploadImgInputRef = useRef(null)
    const mainTextAreaRef = useRef(null)
    const micRecorderRef = useRef(null)

    useOutsideAlerter(addNoteBoxRef)
    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value
        if (target.id === 'txt') {
            return setAddNoteParams(prev => {
                prev.info.txt = value
                return { ...prev }
            })
        }
        setAddNoteParams(prev => {
            return { ...prev, [field]: value }
        })
    }

    function updateParamsSrc(img) {
        addNoteParams.src = img.src
        addNoteParams.type = 'note-img'
        setAddNoteParams({ ...addNoteParams })
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
        setIsRecording(false)
        setAddNoteParams(noteService.getDefaultNote())
        mainTextAreaRef.current.placeholder = 'Take a note...'
        mainTextAreaRef.current.name = 'txt'
        mainTextAreaRef.current.id = 'txt'
        addNoteParams.type = 'note-txt'
    }

    function onYoutube() {
        setIsWriting(true)
        mainTextAreaRef.current.focus()
        mainTextAreaRef.current.placeholder = 'Enter a Youtube Link...'
        mainTextAreaRef.current.name = 'link'
        mainTextAreaRef.current.id = 'link'
        addNoteParams.type = 'note-video'
    }

    function onToDoList() {
        console.log('TODO')
        setIsWriting(true)
        mainTextAreaRef.current.focus()
    }

    function addNote() {
        // if (isRecording) saveRecording()

        if (isEditing) setIsEditing(false)

        const newNote = structuredClone(addNoteParams)

        clearSlate()

        noteService
            .saveNote(newNote)
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

    function onRecord() {
        ;(async () => {
            setIsWriting(true)
            setIsRecording(true)
            mainTextAreaRef.current.placeholder = 'Listening'
            const recorder = await recordAudio()
            micRecorderRef.current = recorder
            recorder.start()
        })()
    }

    async function stopRecording() {
        clearSlate()
        const audio = await micRecorderRef.current.stop()
        var reader = new FileReader()
        reader.readAsDataURL(audio.audioBlob)
        addNoteParams.type = 'note-recording'
        setTimeout(() => {
            addNoteParams.audio = reader.result
            const dataLength = 'data:audio/wav;base64'.length
            addNoteParams.audio = 'data:audio/wav;base64' + reader.result.slice(dataLength)
            addNote()
        }, 100)
    }

    async function saveRecording() {
        const audio = await micRecorderRef.current.stop()
        addNoteParams.audio = audio
        console.log(addNoteParams)
        audio.play()
    }

    return (
        <div className='add-note' ref={addNoteBoxRef}>
            {addNoteParams.src && <img src={addNoteParams.src} />}
            {isWriting && (
                <input
                    type='title'
                    placeholder='Title'
                    id='title'
                    name='title'
                    value={addNoteParams.title}
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
                    value={addNoteParams.info.txt || addNoteParams.link}
                    onChange={handleChange}
                    onClick={() => setIsWriting(true)}
                    ref={mainTextAreaRef}
                />
                {!isWriting && (
                    <div className='inline-utils'>
                        <button className='btn btn-rnd-s'>
                            <i className='fa-solid fa-list' onClick={stopRecording}></i>
                        </button>
                        <button className='btn btn-rnd-s' onClick={onRecord}>
                            <i className='fa-solid fa-microphone'></i>
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
                    <button className='btn add-btn btn-primary' onClick={isRecording ? stopRecording : addNote}>
                        {isRecording ? 'Stop' : 'Save'}
                    </button>
                </div>
            )}
        </div>
    )
}
