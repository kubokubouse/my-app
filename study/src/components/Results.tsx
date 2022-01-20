import { isPropertySignature } from "typescript"

type ResultPropsType={
    results:{
        country:string;
        cityName:string;
        temperature:string;
        conditionText:string;
        icon:string;
    }
}

//上のやつが引数。戻り値は入力した都市の名前や気温の表示
const Result=(props:ResultPropsType)=>{
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
