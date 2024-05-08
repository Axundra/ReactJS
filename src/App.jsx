import { Nav } from './components/NavBar'
import { PeliID, PeliLista, PelisCat } from './components/Layout'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

function App() {
  return <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<PeliLista />} />
      <Route path='/pelicula/:peliID' element={<PeliID />} />
      <Route path='/categoria/:peliCat' element={<PelisCat />} />
    </Routes>
  </BrowserRouter>
}

export default App
