export default function NotePalette({ isInPalette, setColor }) {
    return (
        <div className={`note-palette ${isInPalette ? 'open' : ''}`}>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#3269ff', 'white')}></button>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#ffd947', 'black')}></button>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#0e121a', '#798193')}></button>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#ae3b76', 'white')}></button>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#0beaaf', 'black')}></button>
            <button className='btn btn-rnd-s' onClick={ev => setColor(ev, '#fe7746', 'white')}></button>
        </div>
    )
}
