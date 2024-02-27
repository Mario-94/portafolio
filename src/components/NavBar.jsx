import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm containerNavBar">
      <div className="container-fluid ">
        <Link className="navbar-brand colorText" to={"/"}>
          <h3>
            <span>Mario-94</span>
          </h3>
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon colorText"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link  colorText icon-link-hover"
                aria-current="page"
                to={"/"}
              >
                <span>Inicio</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link colorText" to={"experiencia"}>
                <span>Experiencia laboral</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
