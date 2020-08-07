import React, { useState } from 'react'


const Form = (props) => {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (event) => {
        props.submit(event, text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='I need to...' onChange={handleChange} value={text} />
        </form>
    )
}


export default Form