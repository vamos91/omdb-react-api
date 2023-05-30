import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './pages/Home'
import Movies from './pages/Movies'
import Movie from './pages/Movie'

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
