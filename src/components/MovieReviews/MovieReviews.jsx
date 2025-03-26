import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../js/fetch-api";
import css from "./MovieReviews.module.css";

function MovieReviews() {
  const [rewiews, setRewiews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        // setLoader(true);
        const data = await fetchMovieReviews(movieId);

        setRewiews(data);
      } catch (err) {
        console.log(err);
      } finally {
        // setLoader(false);
      }
    }

    getReviews();
  }, [movieId]);

  if (!rewiews || rewiews.length === 0) {
    return <p>No reviews available</p>;
  }

  return (
    <ul>
      {rewiews.map(({ id, author, content }) => (
        <li className={css.li} key={id}>
          <p className={css.marg}>{author}</p>
          <p className={css.marg}>{content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
