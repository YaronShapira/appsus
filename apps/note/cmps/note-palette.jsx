export default function NotePalette({ isInPalette }) {
    return (
        <div className={`note-palette ${isInPalette ? 'open' : ''}`}>
            <button className='btn btn-rnd-s'></button>
            <button className='btn btn-rnd-s'></button>
            <button className='btn btn-rnd-s'></button>
            <button className='btn btn-rnd-s'></button>
            <button className='btn btn-rnd-s'></button>
            <button className='btn btn-rnd-s'></button>
        </div>
    )
}
