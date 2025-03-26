import { Link, useLocation } from "react-router-dom";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { fetchTrending, sliceText } from "../../js/fetch-api";

function HomePage() {
  const [loader, setLoader] = useState(false);
  const [treidingMovies, setTreidingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getTraidingMovies() {
      try {
        setLoader(true);

        const data = await fetchTrending();
        setTreidingMovies(data.results);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    }
    getTraidingMovies();
  }, []);

  return (
    <>
      {loader && <Loader />}

      <ul className={css.ul}>
        {treidingMovies.map(({ id, backdrop_path, title }) => (
          <li className={css.li} key={id}>
            <Link to={`/movies/${id}`} state={location}>
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
    </>
  );
}

export default HomePage;
