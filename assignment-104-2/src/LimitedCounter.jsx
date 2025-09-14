import { useState } from "react";
export default function LimitedCounter(){
    const[count,setCount] = useState(0);
    const increaseCounter = ()=>{
        if (count<10) {
            setCount(count+1);
        }
    }
    const decreaseCounter = ()=>{
        if (count>0) {
            setCount(count-1);
        }
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={increaseCounter}>Click ME! to increase</button>
            <button onClick={decreaseCounter}>Click ME! to decrease</button>
        </>
    );
}