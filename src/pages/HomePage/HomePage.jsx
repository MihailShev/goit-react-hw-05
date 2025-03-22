import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { fetchTrending } from "../../js/fetch-api";

function HomePage() {
  const sliceText = (text) =>
    text.length > 23 ? `${text.slice(0, 23)}...` : text;

  const [loader, setLoader] = useState(false);
  const [treidingMovies, setTreidingMovies] = useState([]);

  useEffect(() => {
    async function getTraidingMovies() {
      try {
        // setLoader(true);

        const data = await fetchTrending();
        setTreidingMovies(data.results);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    }
    getTraidingMovies();
  }, [treidingMovies]);

  return (
    <>
      {loader && <Loader />}

      <ul className={css.ul}>
        {treidingMovies.map(({ id, backdrop_path, title }) => (
          <li className={css.li} key={id}>
            <Link to={`/movies/${id}`}>
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
