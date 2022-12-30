const { Fragment } = React

export default function TodoInput({ index, handleChange, addNoteParams }) {
    console.log('TEST', addNoteParams)
    return (
        <div className='todo-input-wrapper'>
            <button className='btn btn-rnd-s'>
                {!addNoteParams.todos[index] ? <i className='fa-solid fa-plus'></i> : ''}
            </button>
            <input
                type='text'
                className='todo-input'
                placeholder={`Todo List ${index + 1}`}
                id={`todo${index}`}
                name={`todo${index}`}
                onChange={handleChange}
                value={addNoteParams.todos[index] ? addNoteParams.todos[index].value : ''}
            />
            <button className='btn btn-rnd-s'>
                <i className='fa-solid fa-xmark'></i>
            </button>
        </div>
    )
}
