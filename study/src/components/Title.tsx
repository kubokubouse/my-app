//const 変数名=()=>{return()} でApp.tsxに張り付ける部品を作る。
//retrunの中に画面に表示するモノの処理を書く。ここではワールドウェザーが表示される。
//最初の（）の中に何が入るかと言うと現状確認されるパターンは2つ
//1つはprops: もう一つはe: 
const Title=()=>{
   
    return(
    <h1>ワールドウェザー</h1>
    );
};

//一番の基本形に関しては
//const 変数名: string="山田"　みたいな感じ。
//表記の癖がJavaと違うからわかりにくいけどやってることは同じ。　Java風に書くなら　String　a="山田"

const lastname: string="山田";

//interface これもJavaのインターフェイスと同じで型の指定をするアレ
//ちなみにこれはtypeScript限定の機能
interface human{
    name :string

}

const kubo: human={
    name:'kubo'
}
export default Title;

//第一引数にstring で返り値にnumberがくるのはわかる
//funcって何？
//→プリミティブ型の要領で引数にstringを、戻り値にnumberをとる関数fを
//funcと名付けている説→fはどこいった？
//function 関数名(引数リスト): 返り値の型 {return 返り値}
//なので引数として渡されたargがNumber()で数字に変換されて
//返り値になっているということ
const f:(Kubo: string)=> number=func;

function func(arg: string):number{
    return Number(arg);
}