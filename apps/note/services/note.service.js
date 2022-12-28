import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

export const noteService = {
    getNotes,
    getNote,
    saveNote,
}

const NOTES_KEY = 'notesDB'
_createNotes()

function getNotes() {
    return storageService.query(NOTES_KEY)
}

function getNote(id) {
    return storageService.get(NOTES_KEY, id)
}

function saveNote(note) {}

function _createNote(txt) {
    return {
        id: utilService.makeId(),
        type: 'note-txt',
        isPinned: true,
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
