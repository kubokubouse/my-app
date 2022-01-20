import { isPropertySignature } from "typescript"

type ResultPropsType={
    results:{
        country:string;
        cityName:string;
        
    }
}

//上のやつが引数。戻り値は入力した都市の名前や気温の表示
const Result=(props:ResultPropsType)=>{
    return(
        <div>
            {props.results.cityName&&<div>{props.results.cityName}</div>}

            {props.results.country&&<div>{props.results.country}</div>}


        </div>

    );
};

export default Result;
