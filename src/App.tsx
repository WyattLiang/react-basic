import React, {useState} from 'react';
import {NewTodoForm} from './components/NewTodoForm';
import { TodoModel } from './models/TodoModel';
import './App.css';
import {TodoTable} from './components/TodoTable';

export const App = () => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [todos, setTodos] = useState([
    new TodoModel(1,'Feed puppy','User One'),
    new TodoModel(2,'Water plants','User Tow'),
    new TodoModel(3,'Cook Food','User One'),
    new TodoModel(4,'Clean house','User Two')
    // {rowNumber:1, rowDescription:'Feed puppy',rowAssigned:'User One'},
    // {rowNumber:2, rowDescription:'Water plants',rowAssigned:'User Tow'},
    // {rowNumber:3, rowDescription:'Cook food',rowAssigned:'User One'},
    // {rowNumber:4, rowDescription:'Clean house',rowAssigned:'User Two'}
  ])

  const addTodo = (description:string, assigned:string) => {
    let rowNumber=0;
    if(todos.length>0)
      rowNumber = todos[todos.length-1].rowNumber+1;
    else
      rowNumber=1;
    
    const newTodo = new TodoModel(rowNumber,description,assigned);
    // {
    //     rowNumber: rowNumber,
    //     rowDescription:description,
    //     rowAssigned:assigned
    //   }
    setTodos(todos => [...todos, newTodo]);
    
  }

  const deleteTodo = (deleteTodoRowNumber:number) => {
    let filtered = todos.filter(function (value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary' onClick={()=>setShowAddTodoForm(!showAddTodoForm)}>
            {showAddTodoForm ? 'Close New Todo' : 'New Tdo'}
          </button>
          {showAddTodoForm && 
            <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

