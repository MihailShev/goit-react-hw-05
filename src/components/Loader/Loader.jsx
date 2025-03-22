import BarLoader from "react-spinners/BarLoader";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.div}>
      <BarLoader />
    </div>
  );
}
export default Loader;
