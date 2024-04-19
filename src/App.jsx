import Lista from './components/ItemListContainer'
import Nav from './components/NavBar'

function App() {
  return (
    <body>
      <Nav /> 
      <Lista titulo={"Shrek"} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ex ratione esse labore aut accusamus corrupti nesciunt provident totam modi?"}/>
      <Lista titulo={"Bee Movie"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum perspiciatis quidem delectus, corporis cupiditate voluptatum voluptatibus natus dolorum laborum dolor perferendis laboriosam culpa nemo soluta dolores, odio velit quia!"}/>
      <Lista titulo={"Eterno resplandor de una mente sin recuerdos"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt cupiditate impedit perspiciatis ipsum autem expedita accusamus labore fugit doloribus quasi. Aliquid inventore alias aut dolor."}/>
    </body>
  )
}

export default App
