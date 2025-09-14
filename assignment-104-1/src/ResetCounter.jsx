import { useState } from "react";

export default function ResetCounter(){
    const [count,setCount] = useState(0);
    const increase=()=>{
        setCount(count+1);
    }
    const reseter=()=>{
        setCount(count*0);
    }
    const decrease=()=>{
        setCount(count+1);
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={increase}>click me to increase</button>
            <button onClick={reseter}>click me to reset</button>
            <button onClick={decrease}>click me to decrease</button>
        </>
    );
}