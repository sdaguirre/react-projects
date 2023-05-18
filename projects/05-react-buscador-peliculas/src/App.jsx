import { useCallback, useEffect, useState } from "react";

import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies(search);
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    updateSearch(newQuery);
    debounceData(newQuery);
  };

  const handleSort = (event) => {
    setSort(!sort);
  };

  const debounceData = useCallback(
    debounce((search) => {
      getMovies(search);
    }, 500),
    []
  );

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            type="text"
            name=""
            id=""
            placeholder="Avengers, Star Wars, The Matrix..."
            onChange={handleChange}
            value={search}
          />
          <input
            type="checkbox"
            name="check-sort"
            id=""
            onChange={handleSort}
            value={sort}
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
