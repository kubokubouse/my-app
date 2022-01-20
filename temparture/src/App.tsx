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
 //元々はform側にあった記述だけどこっちに移植された。何故かというとデータはこっちで一元管理しないといけないから。
 //→お前何言ってんの？
 //formってそもそも値を入力するコンポーネントだからここにあるSetCity（データを保管する場所）とか下の入力した都市に対して
 //気温なんかのデータが帰ってきます的なgetWeatherはformで管理しないといけない
 //だけどデータを処理するresultsコンポーネントに送るとなるとform→resultsはNG(データはAppで一括管理せよの原則)
 //というわけでここApp.tsxにuseStateとgetWeatherの記述があるってこと
 //でもForm.tsxでは依然としてこの記述がいるのでそれを解決するのがpropsらしい。propsについては↓へ

  const[city,setCity]= useState<string>("");
 //都市名に対応する国だの気温だの帰ってきた値をStateに入れておく合図。やってることは↑が複数あるみたいな感じ
 //resultsの型はResultsStateType＝countryからiconまでの5つのStringで構構されてるってこと
  const[results,setResults]=useState<ResultsStateType>({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  });

  //メソッドgetWeatherはeって名前のReact.FormEventを引数として渡されると以下の処理をしますよ
  //eが正直よくわからん。要は発生したイベントの情報を取りまとめたものだから特別な記述なくいきなり使っていいのかな
  //ReactFormEventはReactが定めた型で呪文みたいなもん
  const getWeather=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();//リロードを止めろ
    //fetchの中に入れた記述からurl+指定した都市を入力した結果を持ってくる
    fetch(`http://api.weatherapi.com/v1/current.json?key=f3cf137e91ff41ad82421957211612&q=${city}&aqi=no`)
    
    //帰ってきた情報をjson形式に変換
    .then(res =>res.json())
    
    //dataどっから生えてきた？？？？
    //一応dataの中にjsonの情報が入ってるらしい
    //setResultsを使ってStateに拾ってきた結果を書き込みしてる
    //書き込み方はjsonに従う。実際に確認するのはコンソールでやるみたい。
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
  
  // <Form>と<Result>に関して
  //ここでやってるgetWeather={getWeather}は実はFormやResultにたいして値を渡しているのだ。
  //つまりここでは①getWeather(入力した都市に対する気温都市名その他を返却する手続き？)②SetCity（データを書き込む手続き）③result（json化されたデータ）
  //がresultとfoamに出荷されてるってこと
  //これをすることでprops.SetCity の記述にすることでFormやresultsの方でも同じように使えるってわけ
  //ただFormやresultの方でまた記述が必要になるのでそれは別途
  //左辺がここで定義したconstのgetWeatherで右辺がFormで使う用のgetWeather


//ザックリとした全体の流れ
//App.tsxで①都市をStateに保存する処理　②サイトから引っ張ってきたデータをStateに保存する処理 
//③getWeather（入力された都市の名前に対応した気温等のデータをサイトから持ってくる処理）
//の3つを定義しそれぞれFormとResultのコンポーネントに持っていく
//→ここまではworklistも同じことやってるはず？？→getWeather相当のものがない？
//→useEffect使ってるから無理だったっぽい
//→そうでもなかった？

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
