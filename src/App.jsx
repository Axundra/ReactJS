import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PeliLista } from './components/itemList'
import { PelisCateg } from './components/categList'
import { PeliID } from './components/IDList'
import { Cart, ClickAdd } from './components/cartWidget'
import { Nav } from './components/navBar'

function App() {
  return <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<PeliLista />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/pelicula/:peliID' element={<PeliID click={<ClickAdd />} />} />
      <Route path='/categoria/:catParam' element={<PelisCateg />} />
    </Routes>
  </BrowserRouter>
}

export default App
