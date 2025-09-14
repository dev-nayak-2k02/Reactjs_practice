import { useState } from "react";
export default function ToggleMessage(){
    const[phrase,setPhrase] = useState(true);
    const ToggleMessage = ()=>{
        setPhrase(((val) => !val));
    }
    return(
        <>
            <h1>{phrase?'Hello world':'Welcome to react'}</h1>
            <button onClick={ToggleMessage}>click me</button>
        </>
    );
}