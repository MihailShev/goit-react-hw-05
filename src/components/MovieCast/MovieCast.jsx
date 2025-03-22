import { useEffect, useState } from "react";
import { fetchDetailsCredits } from "../../js/fetch-api";
import { useParams } from "react-router-dom";
// import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

function MovieCast() {
  //   const [loader, setloader] = useState(false);
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        // setloader(true);
        const data = await fetchDetailsCredits(movieId);
        setCasts(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        // setloader(true);
      }
    }

    getCast();
  }, [movieId]);

  return (
    <div>
      <ul className={css.ul}>
        {casts.map((cast) => (
          <li className={css.li} key={cast.credit_id}>
            <img
              src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
              alt={cast.original_name}
              width={150}
            />
            <h3>{cast.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
