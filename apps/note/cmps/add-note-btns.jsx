const { Fragment } = React

export default function AddNoteBtns({
    onToDoList,
    onDraw,
    onRecord,
    onYoutube,
    uploadAudioInputRef,
    uploadImgInputRef,
    onMap,
}) {
    return (
        <Fragment>
            <button className='btn btn-rnd-s' onClick={onToDoList}>
                <i className='fa-solid fa-list'></i>
            </button>
            <button className='btn btn-rnd-s' onClick={onDraw}>
                <i className='fa-solid fa-pencil'></i>
            </button>
            <button className='btn btn-rnd-s' onClick={onRecord}>
                <i className='fa-solid fa-microphone'></i>
            </button>
            <button className='btn btn-rnd-s' onClick={onYoutube}>
                <i className='fa-brands fa-youtube'></i>
            </button>
            <button className='btn btn-rnd-s' onClick={() => uploadAudioInputRef.current.click()}>
                <i className='fa-solid fa-music'></i>
            </button>
            <button className='btn btn-rnd-s' onClick={() => uploadImgInputRef.current.click()}>
                <i className='fa-solid fa-image'></i>
            </button>
            <button className='btn btn-rnd-s' onClick={onMap}>
                <i className='fa-solid fa-location-dot'></i>
            </button>
        </Fragment>
    )
}
