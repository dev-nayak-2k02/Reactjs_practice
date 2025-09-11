import Portfolio from "./Portfolio";
function App() {
  let name = 'Dev Nayak';
  let para = 'Hey there Im an Aspiring web developer';
  let About = 'im here';
  let skill1 = 'Html';
  let skill2 = 'css';
  let skill3 = 'js';
  let skill4 = 'react';
  return (
    <>
      <Portfolio
        name = {name}
        para = {para}
        about = {About}
        skills = {[skill1,skill2,skill3,skill4]}
      />
    </>
  );
}

export default App
