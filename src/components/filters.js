import React from 'react'


const Filters = (props) => {

    const handleFilter = (action, e) => {
        props.onFilter(action);
        [...e.target.parentNode.children].forEach(child => child.classList.remove('active'))
        e.target.classList.add('active')
    }

    return (
        <div>
            <button className={'btn active'} onClick={(e) => handleFilter('all', e)} >All</button>
            <button className={'btn'} onClick={(e) => handleFilter('completed', e)}>Completed</button>
            <button className={'btn'} onClick={(e) => handleFilter('incomplete', e)}>Incomplete</button>
        </div>
    )
}

export default Filters