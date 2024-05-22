import { Nav } from './components/NavBar'
import { PeliID, PelisCateg } from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart, ClickAdd } from './components/CartWidget'
import { PeliLista } from './components/itemListContainer'

function App() {
  return <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<PeliLista />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/pelicula/:peliID' element={<PeliID click={<ClickAdd/>}/>} />
      <Route path='/categoria/:peliCat' element={<PelisCateg />} />
    </Routes>
  </BrowserRouter>
}

export default App
