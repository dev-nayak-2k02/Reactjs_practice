import About from "./About";
import Skills from "./Skills";
import Header from "./Header";
import App from "./App";
export default function Portfolio({About, skills, name,para}){
    return(
        <>
            <h1>Name = {name}</h1>
            <h2>Paragraph = {para}</h2>
            <h2>About = {About}</h2>
            <h3>{skills}</h3>
        </>
    );
}