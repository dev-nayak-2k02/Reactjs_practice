import { useState } from "react";
export default function ShowHide(){
    const [show,setShow] = useState(true);
    const ShowHide=()=> {
        setShow(((val)=> !val))
    }
    return(
        <>
            <h1>{show ? "Paragraph Visible":""}</h1>
            <button onClick={ShowHide}>Click me!</button>
        </>        
    )
}