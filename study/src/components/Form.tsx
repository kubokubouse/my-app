import React, { useState } from "react";

//ここもFormPropsTypeの定義をしてる感じ
//SetCityもGetWeatherもStringとかNumberdeではない
type FormPropsType={
    setCity:React.Dispatch<React.SetStateAction<string>>;
    getWeather:(e:any)=>void;
}

//FormPropsTypeを引数として渡してどうのこうの
const Form=(props:FormPropsType)=>{
    //setCity(e.target.value)…ざっくりsetCityに入力した値を引き渡す手順。
    //記入された都市名がsetCityに渡る→setCityからStateに渡る→APIに行くみたいな感じ。多分
    //なのでe.tagrget.value が引数みたいなもん。多分。
    //eがenvent parameter の略語。eディレクトリの中のtargetディレクトリの中のvalueに入力された値があるらしい。
    //e直下にはイベントの発生時間であるtimestamp,クリックされた座標を表すPageX,発生したイベントの種類を表すtypeなどがあるらしい。
    return(
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="都市名" onChange={e=>props.setCity(e.target.value)}/>
            
            <button type="submit" >Get Weather</button>
            
        </form>
    );
};

export default Form;