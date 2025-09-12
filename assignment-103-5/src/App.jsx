import Dashboard from "./Dashboard"
function App() {
  let msg = 'Message is here';
  return (
    <>
      <Dashboard 
        msg = {msg}
      />
      <Dashboard 
        msg = {msg}
      />
    </>
  )
}

export default App
