import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <h1> Game</h1>
      <h2 className='heading'>Tic Tac Toe !</h2>
      <Board/>
    </div>
  );
}

export default App;
