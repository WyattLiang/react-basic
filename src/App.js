import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const todos = [
    {rowNumber:1, rowDescription:'Feed puppy',rowAssigned:'User One'},
    {rowNumber:2, rowDescription:'Water plants',rowAssigned:'User Tow'},
    {rowNumber:3, rowDescription:'Cook food',rowAssigned:'User One'},
    {rowNumber:4, rowDescription:'Clean house',rowAssigned:'User Two'}
  ]

  const addTodo = () => {
    if(todos.length>0){
      const newTodo = {
        rowNumber: todos.length+1,
        rowDescription:'New Todo',
        rowAssigned:'User Three'
      }
      todos.push(newTodo);
      console.log(todos);
    }
    console.log('button clicked');
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTodo}>
            Add new todo
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;