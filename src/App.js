import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./features/Home";
import Footer from "./components/Footer";
import Search from "./features/Search";
import FilmInfo from "./features/FilmInfo";
import TypeFilm from "./features/TypeFilm";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />} />
        <Route path=':type/:id' element={<FilmInfo />} />
        <Route path=':type/popular' element={<TypeFilm />} /> 
        <Route path=':type/nowplaying' element={<TypeFilm />} />
        <Route path=':type/upcoming' element={<TypeFilm />} />
        <Route path=':type/toprated' element={<TypeFilm />} />
        <Route path=':type/airing' element={<TypeFilm />} />
        <Route path=':type/ontv' element={<TypeFilm />} />
      </Routes>
      {/*<Footer />*/}

    </div>
  );
}

export default App;
