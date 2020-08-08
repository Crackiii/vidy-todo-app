import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form'
import List from './components/todoList'
import Filters from './components/filters'

function App() {

  const [list, setList] = useState([])
  const [copiedList, setCopiedList] = useState([])
  const [act, setAct] = useState('')

  useEffect(() => {
    //Filters the list based on the dependencies
    filterList(act)
  }, [act, copiedList])

  const handleFormSubmit = (event, data) => {
    event.preventDefault()
    //When each todo item is created
    setCopiedList((prevState) => {
      let state = [...prevState, { id: Date.now(), data, completed: false }]
      setList(state)
      return state
    })

  }

  const modifyList = (list) => {
    //When any of the todo item is checked / unchecked
    setCopiedList((prevState) => {
      let state = [...prevState];
      setList([...list])
      return state;
    });
  };

  const filterList = (action) => {
    setAct(action)
    switch (action) {
      case 'all': {
        setList([...copiedList])
        break;
      }
      case 'completed': {
        setList([...copiedList.filter(item => item.completed === true)])
        break;
      }
      case 'incomplete': {
        setList([...copiedList.filter(item => item.completed === false)])
        break;
      }
      default: {
        setList([...list])
      }
    }

  }

  return (
    <div className="App">
      <div className="TodoWrapper">
        <h1>Todo</h1>
        <Filters onFilter={filterList} />
        <Form submit={handleFormSubmit} />
        <List data={list} modifyList={modifyList} />
      </div>
    </div>
  );
}

export default App;
