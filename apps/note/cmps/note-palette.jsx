export default function NotePalette({ isInPalette, setColor }) {
    return (
        <div className={`note-palette ${isInPalette ? 'open' : ''}`}>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#3269ff')}></button>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#ffd947')}></button>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#0e121a')}></button>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#ae3b76')}></button>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#0beaaf')}></button>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#fe7746')}></button>
        </div>
    )
}
