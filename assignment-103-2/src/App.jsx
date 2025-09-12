
import FruitShop from "./FruitShop"
function App() {
  let Fruit1 = 'Mango';
  let Fruit2 = 'Strawberry';
  let Fruit3 = 'Apple';
  
  return (
    <>
      <FruitShop Fruit1={Fruit1} Fruit2={Fruit2} Fruit3={Fruit3}/>
      <FruitShop Fruit1={'Orange'} Fruit2={'Avocado'} Fruit3={'Papaya'}/>
    </>
  )
}

export default App
