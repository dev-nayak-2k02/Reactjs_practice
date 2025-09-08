function Header(){
    return(
        <>
            <h1>Dev Prasanna Nayak</h1>
            <h2>Aspiring Web Developer</h2>
        </>
    );
}

function About(){
    return(
        <p>I'm Dev Prasanna Nayak, an aspiring web developer from sambalpur, India</p>
    );
}

function Skills(){
    return(
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>js</li>
            <li>React</li>
        </ul>
    );
}

function Portfolio(){
    return(
        <>
            <Header/>
            <About/>
            <Skills/>
        </>
    );
}

export {Portfolio}