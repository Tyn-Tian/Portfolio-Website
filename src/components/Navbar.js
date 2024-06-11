import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";

const Navbar = () => {
  return (
    <header className="mt-1 px-3 px-md-5">
      <nav className="navbar navbar-dark navbar-expand-lg container">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3" to="/">
            Christian
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark w-75"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Nagivation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto gap-lg-3 gap-0">
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/skills">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/experience">
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="/">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/education">
                    Education
                  </Link>
                </li>
                <ButtonPrimary
                  className={"d-block d-lg-none mt-lg-0 mt-3"}
                  link={"https://github.com/Tyn-Tian"}
                  content={"Github Profile"}
                />
              </ul>
            </div>
          </div>
          <ButtonPrimary
            className={"d-lg-block d-none mt-lg-0 mt-3"}
            link={"https://github.com/Tyn-Tian"}
            content={"Github Profile"}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
