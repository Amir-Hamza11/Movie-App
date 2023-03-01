
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InputProvider } from "./components/misc/Context";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";
import { SaveProvider } from "./components/misc/Save.Context";

function App() {
  return (
    <SaveProvider>
      <InputProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/search" element={<Search />} />
            <Route path="/tv/:id" element={<Tv />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/movie-page" element={<MoviePage />} />
            <Route path="/tv-page" element={<TvPage />} />
          </Routes>
        </BrowserRouter>
      </InputProvider>
    </SaveProvider>
  );
}

export default App;
