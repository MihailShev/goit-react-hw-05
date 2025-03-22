import { useEffect, useState } from "react";
import { fetchDetailsMovie } from "../../js/fetch-api";
import Loader from "../../components/Loader/Loader";
import { Link, Outlet, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const [loader, setLoader] = useState(false);
  const [movieId, setMovieId] = useState({});
  const params = useParams();

  useEffect(() => {
    async function getMovieId() {
      try {
        setLoader(false);
        const data = await fetchDetailsMovie(params.movieId);
        setMovieId(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    }
    getMovieId();
  }, [params]);

  return (
    <div className={css.cont}>
      {loader && <Loader />}

      <div className={css.wrap}>
        <img
          src={`https://image.tmdb.org/t/p/original${movieId.backdrop_path}`}
          alt=""
          width={350}
        />

        <div className={css.inner_wrap}>
          <h2>{movieId.original_title}</h2>
          <span>User Score {movieId.vote_average * 10}%</span>

          <h3>Overview</h3>
          <p className={css.p}>{movieId.overview}</p>

          <h3>Genres</h3>
          <p>{movieId.genres?.map((genre) => genre.name).join(", ")}</p>

          <Link className={css.link} to={movieId.homepage} target="_blank">
            Watch a movie
          </Link>
        </div>
      </div>

      <hr />
      <div className={css.inner_wrap}>
        <p>Additional information</p>

        <Link className={css.link} to="cast">
          Cast
        </Link>
        <Link className={css.link} to="rewiews">
          Rewiews
        </Link>
        <Outlet />
      </div>
      <hr />
    </div>
  );
}

export default MovieDetailsPage;
