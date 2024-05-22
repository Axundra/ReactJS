import { Nav } from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart, ClickAdd } from './components/CartWidget'
import { PeliLista } from './components/itemList'
import { PelisCateg } from './components/categList'
import peliculas from './mock/asyncMock'

function App() {
  return <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<PeliLista arr={peliculas} />} />
      <Route path='/cart' element={<Cart />} />
      {/* <Route path='/pelicula/:peliID' element={<PeliID click={<ClickAdd />} />} /> */}
      <Route path='/categoria/:catParam' element={<PelisCateg />} />
    </Routes>
  </BrowserRouter>
}

export default App
