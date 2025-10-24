import { useState } from "react";
export default function WordSwitcher(){
    let words = ['html','React','javascript'];
    const[word,setWord] = useState(0);
    const Wordchnger=()=>{
        setWord((val)=>(val+1)%words.length);
    }
    return(
        <>
            <h1>{words[word]}</h1>
            <button onClick={Wordchnger}>Click</button>
        </>
    );
}