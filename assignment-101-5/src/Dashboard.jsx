import Greeting from "./Greeting";
function Dashboard(){
    let msg = 'This is our Dashboard';
    return(
        <>
            <Greeting/>
            <h1>{msg}</h1>
        </>
    );
}
export default Dashboard;