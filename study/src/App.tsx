import React, {useState}from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Result from "./components/Results";
import './App.css';

//ここがtypeScriptの真骨頂　ResultsStateTypeは要はJavaにおけるオブジェクトみたいなもん
//属性をここで規定してるってわけ
//interfaceとtyp
type ResultsStateType={
  country:string;
  cityName:string;
  temperature:string;
  conditionText:string;
  icon:string;

}

function App() {
  //入力された都市名が入ってる変数city（型はString）をStateに入れておきますよの合図　Stateはデータを保存しておく場所
  const[city,setCity]= useState<string>("");
　//都市名に対応する国だの気温だの帰ってきた値をStateに入れておく合図。やってることは↑が複数あるみたいな感じ
  const[results,setResults]=useState<ResultsStateType>({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  });

  //メソッドgetWeatherはeって名前のReact.FormEventを引数として渡されると以下の処理をしますよ
  //eが正直よくわからん。要は発生したイベントの情報を取りまとめたものだから特別な記述なくいきなり使っていいのかな
  const getWeather=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();//リロードを止めろ
    //fetchの中に入れた記述からurl+指定した都市を入力した結果を持ってくる
    fetch(`http://api.weatherapi.com/v1/current.json?key=f3cf137e91ff41ad82421957211612&q=${city}&aqi=no`)
    
    //帰ってきた情報をjson形式に変換
    .then(res =>res.json())
    
    //dataどっから生えてきた？？？？
    //一応dataの中にjsonの情報が入ってるらしい
    //拾ってきたデータをsetResultにはめ込んでる？
    .then(data =>{
      setResults({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.temp_c,
        conditionText:data.current.condition.text ,
        icon:data.current.condition.icon
      })
    
    })
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form getWeather={getWeather} setCity={setCity} />
        <Result results={results}/>
      </div>
    </div>
    
  );

}

export default App;
