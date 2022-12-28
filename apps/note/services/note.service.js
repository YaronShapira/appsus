import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

export const noteService = {
    getNotes,
    getNote,
    saveNote,
    getDefaultNote,
    deleteNote,
}

const NOTES_KEY = 'notesDB'
_createNotes()

function getNotes() {
    return storageService.query(NOTES_KEY)
}

function getNote(id) {
    return storageService.get(NOTES_KEY, id)
}

function saveNote(note) {
    const noteToSave = structuredClone(note)
    if (noteToSave.id) {
        console.log('PUTTING')
        return storageService.put(NOTES_KEY, noteToSave)
    } else {
        console.log('POSTING')
        return storageService.post(NOTES_KEY, noteToSave)
    }
}

function deleteNote(id) {
    return storageService.remove(NOTES_KEY, id)
}

function getDefaultNote() {
    return {
        title: '',
        type: 'note-txt',
        isPinned: false,
        info: {
            txt: '',
        },
    }
}

function _createNote(txt) {
    const note = getDefaultNote()
    note.id = utilService.makeId()
    note.info.txt = txt
    return note
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = [
            _createNote('Note number 1...'),
            _createNote('Note number 2!'),
            _createNote('What is this? Note number 3!'),
        ]
    }
    utilService.saveToStorage(NOTES_KEY, notes)
}
