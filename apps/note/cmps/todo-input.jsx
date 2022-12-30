const { Fragment, useState } = React

export default function TodoInput({ index, handleChange, addNoteParams }) {
    const [checked, setChecked] = useState(false)

    function onCheckBox() {
        setChecked(prev => {
            addNoteParams.todos[index].isChecked = !prev
            return !prev
        })
    }
    console.log('TEST', addNoteParams)
    return (
        <div className='todo-input-wrapper'>
            {!addNoteParams.todos[index] ? (
                <button className='btn btn-rnd-s'>
                    <i className='fa-solid fa-plus'></i>
                </button>
            ) : (
                <input type='checkbox' onChange={onCheckBox} />
            )}
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
