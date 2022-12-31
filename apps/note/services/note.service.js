import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

export const noteService = {
    getNotes,
    getNote,
    saveNote,
    getDefaultNote,
    deleteNote,
    duplicateNote,
    getDefaultFilter,
    getNotesCountMap,
}

const NOTES_KEY = 'notesDB'
_createNotes()

function getNotes(filterBy = getDefaultFilter()) {
    return storageService.query(NOTES_KEY).then(notes => {
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            notes = notes.filter(note => regex.test(note.info.txt) || regex.test(note.title))
        }
        if (filterBy.status) {
            notes = notes.filter(note => note.status === filterBy.status)
        }
        return notes
    })
}

function getNotesCountMap() {
    return storageService.query(NOTES_KEY).then(notes => {
        let countMap = {
            'Total Notes': notes.length,
            Trash: 0,
            Archive: 0,
            Pinned: 0,
            Text: 0,
            Todo: 0,
            Drawing: 0,
            Video: 0,
            Image: 0,
            Audio: 0,
        }
        notes.forEach(note => {
            if (note.Pinned) {
                countMap.Pinned++
            }
            if (note.type === 'note-txt') {
                countMap.Text++
            }
            if (note.type === 'note-todo') {
                countMap.Todo++
            }
            if (note.type === 'note-canvas') {
                countMap.Drawing++
            }
            if (note.type === 'note-video') {
                countMap.Video++
            }
            if (note.type === 'note-audio') {
                countMap.Audio++
            }
            if (note.type === 'note-img') {
                countMap.Image++
            }
            if (note.status) {
                switch (note.status) {
                    case 'archive':
                        countMap['Archive']++
                        break
                    case 'trash':
                        countMap['Trash']++
                        break

                    default:
                        break
                }
            }
        })
        return countMap
    })
}

function duplicateNote(note) {
    const newNote = structuredClone(note)
    newNote.id = utilService.makeId()
    return newNote
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
        id: null,
        title: '',
        type: 'note-txt',
        isPinned: false,
        info: {
            txt: '',
        },
        src: '',
        style: {},
        link: '',
        audio: '',
        todos: [],
        loc: {},
        status: 'notes',
    }
}
function getDefaultFilter() {
    return { txt: '', status: 'notes' }
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
        notes = [
            _createNote('Remember the wedding of Noa & Cody', 'Wedding'),
            _createNote('Remember to do all the bonuses or else...', 'Extra Features'),
            _createNote(
                'My advice to you is get married: If you find a good wife you’ll be happy; if not, you’ll become a philosopher'
            ),
            _createNote('Chupa chups tootsie roll croissant marshmallow sugar plum chocolate bar', 'Chocolate'),
            _createNote(
                'If you want to be sure that you never forget your wife’s birthday, just try forgetting it once.'
            ),
            _createNote('Remember to flush after using the toilet'),
            _createNote('Never go to bed mad. Stay up and fight'),
            _createNote(
                'Adults are always asking children what they want to be when they grow up because they’re looking for ideas'
            ),
            _createNote('When life gives you lemons, just say ‘fuck the lemons’, and bail', 'Funny Quote Number 52'),
            _createNote('Never let your best friends get lonely, keep disturbing them.'),
            _createNote('Friends buy you food. Best friends eat your food.', 'Truth'),
        ]
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
                src: '',
                status: 'notes',
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
                src: '',
                status: 'notes',
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'My advice to you is get married: If you find a good wife you’ll be happy; if not, you’ll become a philosopher',
                },
                style: { backgroundColor: '#8cc40f', color: 'black' },
                src: '',
                status: 'notes',
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
                src: '',
                status: 'notes',
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
                src: '',
                status: 'notes',
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
                src: '',
                status: 'archive',
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Never go to bed mad. Stay up and fight',
                },
                style: { backgroundColor: '#fe7745', color: 'black' },
                src: '',
                status: 'archive',
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Adults are always asking children what they want to be when they grow up because they’re looking for ideas',
                },
                style: { backgroundColor: '#3269ff', color: 'white' },
                src: '',
                status: 'trash',
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
                src: '',
                status: 'notes',
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
                src: '',
                status: 'notes',
            },
            {
                id: utilService.makeId(),
                title: 'Truth',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Friends buy you food. Best friends eat your food.',
                },
                style: { backgroundColor: '#fe7745', color: 'black' },
                src: '',
                status: 'notes',
            },
            {
                id: utilService.makeId(),
                title: 'Truth',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'This is trash!',
                },
                style: {},
                src: '',
                status: 'trash',
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Brb, letting 21 do something for me rn',
                },
                style: { backgroundColor: '#', color: 'white' },
                src: '',
                status: 'notes',
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Brb, letting 21 do something for me rn',
                },
                style: { backgroundColor: '#ae3b76', color: 'white' },
                src: '',
                status: 'notes',
            },
            {
                id: utilService.makeId(),
                title: 'Boring',
                type: 'note-txt',
                isPinned: true,
                info: {
                    txt: 'Just a boring note',
                },
                style: { backgroundColor: '#3269ff', color: 'white' },
                src: '',
                status: 'notes',
            },
            {
                id: utilService.makeId(),
                title: 'Todo list!',
                type: 'note-todo',
                isPinned: true,
                style: {},
                info: {
                    txt: '',
                },
                todos: [
                    { value: 'Sprint 3 Done!', isChecked: true },
                    { value: 'Sprint 4 Done?', isChecked: false },
                ],
                src: '',
                status: 'notes',
            },
            {
                id: utilService.makeId(),
                title: 'Sweet sweet home',
                type: 'note-map',
                isPinned: false,
                style: {},
                info: {
                    txt: 'Alabama!',
                },
                src: '',
                status: 'notes',
                loc: { lat: 32.2984142, lng: 34.8513687 },
            },
            {
                id: utilService.makeId(),
                title: '',
                type: 'note-video',
                isPinned: true,
                style: {},
                info: {
                    txt: '',
                },
                link: 'https://www.youtube.com/embed/LlU4FuIJT2k',
                src: '',
                status: 'notes',
            },
        ]
    }

    // notes = JSON.parse(dataJSON)
    // Object.keys(data).forEach(function (k) {
    //     localStorage.setItem(k, JSON.stringify(data[k]))
    // })
    utilService.saveToStorage(NOTES_KEY, notes)
}
