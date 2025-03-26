import { Link, useLocation } from "react-router-dom";
import { sliceText } from "../../js/fetch-api";
import css from "./MovieList.module.css";

function MovieList({ id, backdrop_path, title }) {
  const location = useLocation();

  return (
    <Link className={css.link} to={`/movies/${id}`} state={location}>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt="Movie photo"
        width={250}
      />

      <h2 className={css.title}>{sliceText(title)}</h2>
    </Link>
  );
}

export default MovieList;
