import { isPropertySignature } from "typescript"

//propsとして引き渡されてきたresultの定義。
//注意するのはresultsが5つのstringから成る、という構成なのでResultPropsTypeの下にresultがあってさらにその下に
//5つのstringがある、という型構成になるということ。
//Q　Formの時と何が違うの　result抜きでResultPropsType→5つのstringじゃあかんの
//A Formの時はgetWeatherとSetCityの二つのメソッドを持つFormType
//今回はresultという下に5つのstringがあるクラスを持つResultType で差ができたのかなと
type ResultPropsType={
    results:{
        country:string;
        cityName:string;
        temperature:string;
        conditionText:string;
        icon:string;
    }
}

//App.tsxで手に入れたresultsをここで使う。引数としてAppから入手したresultを使いたいのでpropsを使う
//propsを使うのでpropsに型を付ける必要がある。Appを見てもらえばわかるように渡されたresultsは5つのstringから成るので
//↑で定義する
//上のやつが引数。戻り値は入力した都市の名前や気温の表示
const Result=(props:ResultPropsType)=>{
    //Q 下の処理はどうなってんだ？
    //A &&の左側が存在するないしtrueの場合のみ右側の処理をしますよってやつ　つまり都市の入力があった場合のみ
    //右の記述が出てくるってことです
    return(
        <div>
            {props.results.cityName&&<div>{props.results.cityName}</div>}

            {props.results.country&&<div>{props.results.country}</div>}

            {props.results.temperature&&<div>{props.results.temperature}</div>}

            {props.results.conditionText&&
                <div className="results-condition">
                    <img src={props.results.icon} alt="icon"/>
                    <span>{props.results.conditionText}</span>
                </div>
            }
        </div>

    );
};

export default Result;
