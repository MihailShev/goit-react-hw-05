import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../js/fetch-api";
import css from "./MovieReviews.module.css";

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        // setLoader(true);
        const data = await fetchMovieReviews(movieId);

        setReviews(data);
      } catch (err) {
        console.log(err);
      } finally {
        // setLoader(false);
      }
    }

    getReviews();
  }, [movieId]);

  if (!reviews || reviews.length === 0) {
    return <p>No reviews available</p>;
  }

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li className={css.li} key={id}>
          <p className={css.marg}>{author}</p>
          <p className={css.marg}>{content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
