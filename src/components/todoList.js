import React, { useState } from 'react'


const List = (props) => {

    const { data } = props

    const handleCheck = (e) => {
        let newList = data.map(item => {
            if (item.id === parseInt(e.target.id)) {
                item.completed = !item.completed
            }
            return item
        })
        props.modifyList(newList)
    }

    return (
        <ul>
            {
                data.map((item, index) => {
                    return (
                        <li key={index}>
                            <input type='checkbox' id={item.id} onChange={handleCheck} checked={item.completed} />
                            <label htmlFor={item.id}>{item.data}</label>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List