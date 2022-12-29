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
        style: {},
    }
}

function _createNote(txt, title = '') {
    const note = getDefaultNote()
    note.id = utilService.makeId()
    note.info.txt = txt
    note.title = title
    return note
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        // notes = [
        //     _createNote('Remember the wedding of Noa & Cody', 'Wedding'),
        //     _createNote('Remember to do all the bonuses or else...', 'Extra Features'),
        //     _createNote(
        //         'My advice to you is get married: If you find a good wife you’ll be happy; if not, you’ll become a philosopher'
        //     ),
        //     _createNote(
        //         'Chupa chups tootsie roll croissant marshmallow sugar plum chocolate bar',
        //         'Chocolate'
        //     ),
        //     _createNote(
        //         'If you want to be sure that you never forget your wife’s birthday, just try forgetting it once.'
        //     ),
        //     _createNote('Remember to flush after using the toilet'),
        //     _createNote('Never go to bed mad. Stay up and fight'),
        //     _createNote(
        //         'Adults are always asking children what they want to be when they grow up because they’re looking for ideas'
        //     ),
        //     _createNote(
        //         'When life gives you lemons, just say ‘fuck the lemons’, and bail',
        //         'Funny Quote Number 52'
        //     ),
        //     _createNote('Never let your best friends get lonely, keep disturbing them.'),
        //     _createNote('Friends buy you food. Best friends eat your food.', 'Truth'),
        // ]
        notes = [
            {
                id: utilService.makeId(),
                title: 'Wedding',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Remember the wedding of Noa & Cody',
                },
                style: {},
            },
            {
                id: utilService.makeId(),
                title: 'Extra Features',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Remember to do all the bonuses or else...',
                },
                style: { backgroundColor: '#3269ff', color: 'white' },
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'My advice to you is get married: If you find a good wife you’ll be happy; if not, you’ll become a philosopher',
                },
                style: { backgroundColor: '#ffd947', color: 'black' },
            },
            {
                id: utilService.makeId(),
                title: 'Chocolate',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Chupa chups tootsie roll croissant marshmallow sugar plum chocolate bar',
                },
                style: {},
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'If you want to be sure that you never forget your wife’s birthday, just try forgetting it once.',
                },
                style: { backgroundColor: '#ae3b76', color: 'white' },
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Remember to flush after using the toilet',
                },
                style: {},
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Never go to bed mad. Stay up and fight',
                },
                style: { backgroundColor: '#0beaaf', color: 'black' },
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Adults are always asking children what they want to be when they grow up because they’re looking for ideas',
                },
                style: { backgroundColor: '#0e121a', color: 'white' },
            },
            {
                id: utilService.makeId(),
                title: 'Funny Quote Number 52',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'When life gives you lemons, just say ‘fuck the lemons’, and bail',
                },
                style: {},
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Never let your best friends get lonely, keep disturbing them.',
                },
                style: {},
            },
            {
                id: utilService.makeId(),
                title: 'Truth',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Friends buy you food. Best friends eat your food.',
                },
                style: { backgroundColor: '#fe7746', color: 'white' },
            },
        ]
    }
    utilService.saveToStorage(NOTES_KEY, notes)
}
