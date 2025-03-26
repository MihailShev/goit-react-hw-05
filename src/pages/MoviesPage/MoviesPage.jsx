import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchQuery } from "../../js/fetch-api";
import css from "./MoviesPage.module.css";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

function MoviesPage() {
  const [loader, setLoader] = useState(false);
  const [movie, setMovie] = useState([]);
  const [searchQuery, setQuery] = useSearchParams();
  const query = searchQuery.get("q") ?? "";

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newQuery = form.elements.User_search_query.value.trim();
    if (newQuery === "") return;

    setQuery({ q: newQuery });
  };

  useEffect(() => {
    if (!query) return;

    async function getQueryMovie() {
      try {
        setLoader(true);
        const data = await fetchSearchQuery(query);
        setMovie(data);
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

      <ul className={css.ul}>
        {movie.map(({ id, backdrop_path, title }) => (
          <li key={id} className={css.li}>
            {<MovieList id={id} backdrop_path={backdrop_path} title={title} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesPage;
