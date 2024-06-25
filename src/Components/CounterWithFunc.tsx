
type Tprops={
    count:number;
    setCount:React.Dispatch<React.SetStateAction<number>>
}

const CounterWithFunc = ({count , setCount}:Tprops) => {
   
    return (
        <div className="border border-red-600 p-2 m-7">
           <button className="bg-amber-700" onClick={()=>setCount(count+1)}>{count}</button> 
        </div>
    );
};

export default CounterWithFunc;