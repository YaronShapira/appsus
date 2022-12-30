const { Fragment } = React

export default function TodoInput({ index }) {
    return (
        <div className='todo-input-wrapper'>
            <button className='btn btn-rnd-s'>
                <i className='fa-solid fa-plus'></i>
            </button>
            <input
                type='text'
                className='todo-input'
                placeholder={`Todo List ${index}`}
                id={`todo${index}`}
                name={`todo${index}`}
            />
            <button className='btn btn-rnd-s'>
                <i className='fa-solid fa-xmark'></i>
            </button>
        </div>
    )
}
