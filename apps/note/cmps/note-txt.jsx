import NoteHoversBtns from './note-hovers-btns.jsx'
const { useRef } = React

export default function NoteTxt({ note, setIsEditing, onDeleteNote, setColor, onDuplicateNote, onPin }) {
    const noteArticleRef = useRef(null)
    function onHover() {
        noteArticleRef.current.classList.add('z-2')
    }
    function onHoverLeave() {
        noteArticleRef.current.classList.remove('z-2')
    }

    return (
        <article
            style={note.style}
            ref={noteArticleRef}
            className='note-preview'
            onClick={() => setIsEditing(true)}
            onMouseEnter={onHover}
            onMouseLeave={onHoverLeave}>
            <h5>{note.title}</h5>
            <p>{note.info.txt}</p>

            <NoteHoversBtns
                onDeleteNote={onDeleteNote}
                setColor={setColor}
                onDuplicateNote={onDuplicateNote}
                onPin={onPin}
            />
        </article>
    )
}
