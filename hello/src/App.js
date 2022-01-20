import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=f3cf137e91ff41ad82421957211612&q=Tokyo&aqi=no`)
  
    //帰ってきた情報をjson形式に変換
    .then(res =>res.json())
    alert("res="+res)

    //dataどっから生えてきた？？？？
    //一応dataの中にjsonの情報が入ってるらしい
    //setResultsを使ってStateに拾ってきた結果を書き込みしてる
    //書き込み方はjsonに従う。実際に確認するのはコンソールでやるみたい。
    

    const arr = ["ゴリラ", "パパ", 3];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Micropig！
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ul>
              {arr.map((fruit, i) => <li key={i}>{fruit}</li>)}
          </ul>
        </header>
      </div>
    );
  }
}


export default App;