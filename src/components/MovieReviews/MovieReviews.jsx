import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../js/fetch-api";

function MovieReviews() {
  const [rewiews, setRewiews] = useState({});
  const { movieId } = useParams();
  console.log(rewiews);

  useEffect(() => {
    async function getReviews() {
      try {
        // setLoader(true);
        const data = await fetchMovieReviews(movieId);
        setRewiews(...data);
      } catch (err) {
        console.log(err);
      } finally {
        // setLoader(false);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <div>
      <h4>{rewiews.author}</h4>
      <p>{rewiews.content}</p>
    </div>
  );
}

export default MovieReviews;
