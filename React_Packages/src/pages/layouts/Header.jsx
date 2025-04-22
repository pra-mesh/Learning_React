import { Link, useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="container-fluid">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32" aria-hidden="true">
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4">Pro Resume AI</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Login"
                className={`nav-link ${pathname === "/Login" ? "active" : ""}`}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin/"
                className={`nav-link ${pathname === "/admin/" ? "active" : ""}`}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
