import logo from './david.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Homework #4
        </p>
        <a
          className="App-link"
          href="https://github.com/Pastekeleton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Favorite Link
        </a>
      </header>
    </div>
  );
}

export default App;
