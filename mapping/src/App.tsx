import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
  fetch(`http://localhost:8080/login?email=ryowhite@icloud.com&password=0000` ,{mode: 'cors'}) 
  
    
        .then(data => {
            // console.log(request.data)
            this.setState({
                pods: request.data.items
            })
            console.log(this.state.pods)
        })
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
