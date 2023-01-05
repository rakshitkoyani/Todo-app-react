import React from "react";
import {useState, useEffect, useRef} from 'react';
import TodoCreator from "./FormInput";
import TodoList from "./List";
import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette:{
    primary:{
      primary:{
        main: "#000000"
      },
  }
}});

const Form = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([
    {
      text: "learn about React",
      isComplected: false,
      isEditing: false
    },
    {
      text: "Hello What is your next task",
      isComplected: false,
      isEditing: false
    }
  ]);
const inputRef = useRef();
const noteRef = useRef({});
const [isInputEmpty, setInputEmpty]= useState(false)

const handleSubmit = e => {
  e.preventDefault();
  addTodo(newTodo);
  clearInput();
  inputRef.current.focus();
};

const preventDefault = e => {
  if(e.key == 'Enter'){
    e.preventDefault();
  }
};

const addTodo = text => {
  if(text !== ''){
    const newTodos = [...todos, {text}];
    setInputEmpty(false);
    setTodos(newTodos);
  }else{
    console.log('text', text);
    setInputEmpty(true);
  }
};

const removeTodo = inx => {
  const newArr = [...todos]
newArr.splice(inx, 1)
setTodos(newArr)
}

const completeTodo = inx  => {
  const newTodos = [...todos];
  newTodos[inx].isComplected = !newTodos[inx].isComplected;
  setTodos(newTodos);
}
const editTodo = inx  => {
  const newTodos = [...todos];
  newTodos[inx].isEditing = !newTodos[inx].isEditing;
  setTodos(newTodos);
}

const saveTodo = (inx) => {
  const newTodos = [...todos];
  newTodos[inx].isEditing = !newTodos[inx].isEditing;
  newTodos[inx].text = noteRef.current[inx].value;
  setTodos(newTodos);
}
const clearInput = () => {
  setNewTodo('');
}

const setTodo = todo => {
  setInputEmpty(false);
  setNewTodo(todo);
}

useEffect (() => {
  
},[todos])

return(
  <form action="" onSubmit={handleSubmit} className="form">
    <TodoCreator theme={theme} todo={newTodo}
    setTodo= {setTodo}
    clearInput = {clearInput}
    inputRef = {inputRef}
    isInputEmpty = {isInputEmpty}
    preventSubmit={preventSubmit}
    >
    </TodoCreator>
  <TodoList
  theme={theme}
  todos= {todos}
  completeTodo={completeTodo}
  editTodo={editTodo}
  deleteTodo={removeTodo}
  saveTodo={saveTodo}
  noteRef={noteRef}
  preventSubmit= {preventSubmit}
  />
  
  </form>
)
}
export default Form;
