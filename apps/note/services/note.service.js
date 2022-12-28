import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

export const noteService = {
    getNotes,
    getNote,
    saveNote,
    getDefaultNote,
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
    console.log(note.id)
    if (note.id) {
        console.log('PUTTING')
        return storageService.put(NOTES_KEY, note)
    } else {
        console.log('POSTING')
        return storageService.post(NOTES_KEY, note)
    }
}

function getDefaultNote() {
    return {
        type: 'note-txt',
        isPinned: false,
        info: {
            txt: '',
        },
    }
}

function _createNote(txt) {
    return {
        id: utilService.makeId(),
        type: 'note-txt',
        isPinned: false,
        info: {
            txt,
        },
    }
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
