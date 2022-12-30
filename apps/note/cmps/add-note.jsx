const { useState, useEffect, useRef, Fragment } = React

import { noteService } from '../services/note.service.js'
import { recordAudio } from '../services/record.service.js'
import loadImageFromInput from '../services/upload.service.js'
import TodoInput from './todo-input.jsx'

export default function AddNote({ note, setNotes, isEditing, setIsEditing }) {
    const [addNoteParams, setAddNoteParams] = useState(structuredClone(note) || noteService.getDefaultNote())
    const [isWriting, setIsWriting] = useState(isEditing || false)
    const [isRecording, setIsRecording] = useState(false)
    const [isInputOpened, setIsInputOpened] = useState(isEditing || false)
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
                prev.info[target.id] = value
                return { ...prev }
            })
        }

        if (field.startsWith('todo')) {
            return setAddNoteParams(prev => {
                const todoIdx = field.at(-1)
                if (!prev.todos[todoIdx]) {
                    prev.todos.push({ value, isChecked: false })
                }
                prev.todos[todoIdx].value = value
                return { ...prev }
            })
        }
        setAddNoteParams(prev => {
            return { ...prev, [field]: value }
        })
    }

    function onUploadImg(ev) {
        loadImageFromInput(ev, img => {
            addNoteParams.src = img.src
            addNoteParams.type = 'note-img'
            setAddNoteParams({ ...addNoteParams })
        })
        setIsWriting(true)
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            // Alert if clicked on outside of element
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    if (isEditing) setIsEditing(false)

                    clearSlate()
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
        setIsInputOpened(false)
        setIsWriting(false)
        setIsRecording(false)
        setIsInputOpened(false)
        setAddNoteParams(noteService.getDefaultNote())
        mainTextAreaRef.current.placeholder = 'Take a note...'
        mainTextAreaRef.current.name = 'txt'
        mainTextAreaRef.current.id = 'txt'
        addNoteParams.type = 'note-txt'
        if (micRecorderRef.current) {
            micRecorderRef.current.terminateRecording()
        }
    }

    function onYoutube() {
        setIsWriting(true)
        mainTextAreaRef.current.focus()
        mainTextAreaRef.current.placeholder = 'Enter a Youtube Link...'
        mainTextAreaRef.current.name = 'link'
        mainTextAreaRef.current.id = 'link'
        addNoteParams.type = 'note-video'
    }

    function addNote() {
        if (isEditing) setIsEditing(false)

        const newNote = structuredClone(addNoteParams)

        clearSlate()

        noteService
            .saveNote(newNote)
            .then(newNoteFromDB => {
                newNote.id = newNoteFromDB.id
                setNotes(prev => [...prev])
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
            setIsInputOpened(true)
            addNoteParams.type = 'note-recording'
            mainTextAreaRef.current.placeholder = 'Listening'
            const recorder = await recordAudio()
            micRecorderRef.current = recorder
            recorder.start()
            setIsWriting(true)
            setIsRecording(true)
        })()
    }

    async function stopRecording() {
        const audio = await micRecorderRef.current.stop()
        var reader = new FileReader()
        reader.readAsDataURL(audio.audioBlob)

        setTimeout(() => {
            addNoteParams.audio = reader.result
            const dataLength = 'data:audio/wav;base64'.length
            addNoteParams.audio = 'data:audio/wav;base64' + reader.result.slice(dataLength)
            addNote()
        }, 100)
    }

    console.log(addNoteParams)

    function getTextAreaRows() {
        if (isEditing) return 3
        if (isWriting) return 2
        return 1
    }

    function onToDoList() {
        console.log('TODO')
        setIsWriting(true)
        addNoteParams.type = 'note-todo'
        // mainTextAreaRef.current.placeholder = 'List item 1'
        // mainTextAreaRef.current.classList.add('todo-input')
        // mainTextAreaRef.current.focus()
    }

    return (
        <Fragment>
            <div className={`add-note ${isInputOpened ? 'add-note-modal' : ''}`} ref={addNoteBoxRef}>
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
                        rows={getTextAreaRows()}
                        value={addNoteParams.info.txt || addNoteParams.link}
                        onChange={handleChange}
                        onClick={() => setIsWriting(true)}
                        ref={mainTextAreaRef}
                        hidden={addNoteParams.type === 'note-todo' ? true : false}
                    />
                    {addNoteParams.type === 'note-todo' && (
                        <div className='todo-input-list'>
                            {[...Array(addNoteParams.todos.length + 1)].map((_, idx) => {
                                return (
                                    <TodoInput
                                        index={idx}
                                        handleChange={handleChange}
                                        addNoteParams={addNoteParams}
                                        key={idx}
                                    />
                                )
                            })}
                        </div>
                    )}

                    {!isWriting && (
                        <div className='inline-utils'>
                            <button className='btn btn-rnd-s' onClick={onToDoList}>
                                <i className='fa-solid fa-list'></i>
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
            {isInputOpened && <div className='dark-overlay'></div>}
        </Fragment>
    )
}
