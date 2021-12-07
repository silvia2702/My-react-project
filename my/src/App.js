import logo from './logo.svg';
import './App.css';
import Box from './box'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
          This is the giraffe's app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
