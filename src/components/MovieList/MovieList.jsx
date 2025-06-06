import { Link, useLocation } from "react-router-dom";
import { sliceText } from "../../js/fetch-api";
import css from "./MovieList.module.css";

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.ul}>
      {movies.map(({ id, backdrop_path, title }) => (
        <li className={css.li} key={id}>
          <Link className={css.link} to={`/movies/${id}`} state={location}>
            <img
              src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
              alt="Movie photo"
              width={250}
            />

            <h2 className={css.title}>{sliceText(title)}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
