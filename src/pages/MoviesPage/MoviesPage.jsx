import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchQuery } from "../../js/fetch-api";
import css from "./MoviesPage.module.css";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

function MoviesPage() {
  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setQuery] = useSearchParams();
  const query = searchQuery.get("q") ?? "";

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newQuery = form.elements.User_search_query.value.trim();
    const newParams = new URLSearchParams(searchQuery);

    if (newQuery !== "") {
      newParams.set("q", newQuery);
    } else {
      setMovies([]);
    }

    setQuery(newParams);
    form.reset();
  };

  useEffect(() => {
    if (!query) return;

    async function getQueryMovie() {
      try {
        setLoader(true);
        const data = await fetchSearchQuery(query);
        setMovies(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    }

    getQueryMovie();
  }, [query]);

  return (
    <div>
      <div className={css.div}>
        <form onSubmit={onSubmit}>
          <input type="text" name="User_search_query" />
          <button className={css.but} type="submit">
            Search
          </button>
        </form>
      </div>

      {loader && <Loader />}

      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
