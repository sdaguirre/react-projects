export const searchMovies = async (search) => {
  if (search === "") return;
  try {
    //setResponseMovies(withResults);
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=10a92398&s=${search}`
    );
    const json = await response.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (e) {
    throw new Error("Error searching movies");
  }
};
