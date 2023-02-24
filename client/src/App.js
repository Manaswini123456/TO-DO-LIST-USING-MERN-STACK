//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import TodoForm from './components/Todoform/TodoForm';
import Todos from './components/Todos/Todos';
function App() {
  return (
    <div className="App">
      <Header/>
      <TodoForm></TodoForm>
      <Todos></Todos>
    </div>
  );
}

export default App;
