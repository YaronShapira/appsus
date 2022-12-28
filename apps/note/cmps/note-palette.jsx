export default function NotePalette({ isInPalette }) {
    function onColor(color) {
        console.log(color)
    }
    return (
        <div className={`note-palette ${isInPalette ? 'open' : ''}`}>
            <button className='btn btn-rnd-s' onClick={() => onColor('#3269ff')}></button>
            <button className='btn btn-rnd-s' onClick={() => onColor('#ffd947')}></button>
            <button className='btn btn-rnd-s' onClick={() => onColor('#0e121a')}></button>
            <button className='btn btn-rnd-s' onClick={() => onColor('#ae3b76')}></button>
            <button className='btn btn-rnd-s' onClick={() => onColor('#0beaaf')}></button>
            <button className='btn btn-rnd-s' onClick={() => onColor('#fe7746')}></button>
        </div>
    )
}
