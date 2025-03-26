import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={css.div}>
      <p>
        404 Not Found! Please follow this
        <Link className={css.link} to="/">
          link.
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
