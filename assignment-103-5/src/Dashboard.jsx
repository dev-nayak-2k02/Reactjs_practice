import Greeting from "./Greeting";
export default function Dashboard({msg}){
    return(
        <>
            <Greeting/>
            msg ={msg}
        </>
    );
}