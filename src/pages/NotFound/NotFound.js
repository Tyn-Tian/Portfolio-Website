import { Link } from "react-router-dom";
import TitlePage from "../../components/TitlePage/TitlePage";
import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="mt-5 pt-5 px-3 px-md-5">
      <section className="not-found container">
        <TitlePage h1="NotFound" />
        <p className=" text-center">
          <Link className="text-decoration-none" to="/">
            Back to home.
          </Link>
        </p>
      </section>
    </main>
  );
};

export default NotFound;
