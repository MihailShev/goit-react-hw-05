import { Suspense, useEffect, useRef, useState } from "react";
import { fetchDetailsMovie } from "../../js/fetch-api";
import Loader from "../../components/Loader/Loader";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const [loader, setLoader] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  const location = useLocation();
  const backLink = useRef(location.state);

  useEffect(() => {
    async function getMovieId() {
      try {
        setLoader(false);
        const data = await fetchDetailsMovie(params.movieId);
        setMovieDetails(data);
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
      <Link className={css.but} to={backLink.current}>
        Go back
      </Link>

      {loader && <Loader />}

      <div className={css.wrap}>
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
          alt=""
          width={350}
        />

        <div className={css.inner_wrap}>
          <h2>{movieDetails.original_title}</h2>
          <span>User Score {movieDetails.vote_average * 10}%</span>

          <h3>Overview</h3>
          <p className={css.p}>{movieDetails.overview}</p>

          <h3>Genres</h3>
          <p>{movieDetails.genres?.map((genre) => genre.name).join(", ")}</p>

          <Link className={css.link} to={movieDetails.homepage} target="_blank">
            Watch a movie
          </Link>
        </div>
      </div>

      <hr />
      <div className={css.inner_wrap}>
        <p>Additional information</p>

        <NavLink className={css.link} to="cast">
          Cast
        </NavLink>
        <NavLink className={css.link} to="reviews">
          Rewiews
        </NavLink>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <hr />
    </div>
  );
}

export default MovieDetailsPage;
