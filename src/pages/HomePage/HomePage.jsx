import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { fetchTrending } from "../../js/fetch-api";
import MovieList from "../../components/MovieList/MovieList";

function HomePage() {
  const [loader, setLoader] = useState(false);
  const [treidingMovies, setTreidingMovies] = useState([]);

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

      <MovieList movies={treidingMovies} />
    </>
  );
}

export default HomePage;
