import { useState } from "react";
export default function VotingApp(){
    const[voteA,setVoteA] = useState(0);
    const[voteB,setVoteB] = useState(0);
    const countVoteA=()=>{
        setVoteA(voteA+1);
    }
    const countVoteB=()=>{
        setVoteB(voteB+1);
    }
    return(
        <>
            <h1>vote of A = {voteA},vote of B = {voteB}</h1>
            <button onClick={countVoteA}>click me! to vote A</button>
            <button onClick={countVoteB}>click me! to vote B</button>
        </>
    );
}