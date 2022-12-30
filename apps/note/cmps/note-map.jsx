import { mapService } from '../services/map.service.js'
import NoteHoversBtns from './note-hovers-btns.jsx'
const { useRef, useEffect } = React

export default function NoteMap({ note, setIsEditing, onDeleteNote, setColor, onDuplicateNote, onPin, onArchive }) {
    const noteArticleRef = useRef(null)
    const mapRef = useRef(null)
    function onHover() {
        noteArticleRef.current.classList.add('z-2')
    }
    function onHoverLeave() {
        noteArticleRef.current.classList.remove('z-2')
    }

    useEffect(() => {
        mapService.initMap(mapRef.current, note.loc)
    }, [])

    return (
        <article
            style={note.style}
            ref={noteArticleRef}
            className='note-preview'
            onClick={() => setIsEditing(true)}
            onMouseEnter={onHover}
            onMouseLeave={onHoverLeave}>
            <div id='map' ref={mapRef}></div>
            <h5>{note.title}</h5>
            <p>{note.info.txt}</p>

            <NoteHoversBtns
                onDeleteNote={onDeleteNote}
                setColor={setColor}
                onDuplicateNote={onDuplicateNote}
                onPin={onPin}
                onArchive={onArchive}
            />
        </article>
    )
}
