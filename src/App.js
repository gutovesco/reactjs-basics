import React, {useState} from 'react';
import Logo from './logo';
import './App.css';
import Home from './home/index'


const App = () => {

  const [contagem, setContagem] = useState({})
  const [verifica, setVerifica] = useState(false)


  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <Home />
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
