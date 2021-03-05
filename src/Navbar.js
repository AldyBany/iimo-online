// import Link from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <header className="header">
        <div className="container">
          {/* <!-- Navbar --> */}
          <nav className="navbar navbar-expand-lg navbar-light">
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid">
              {/* <!-- Navbar brand --> */}
              <Link className="navbar-brand" to="">
                <span className="color-primary">II</span>MO
              </Link>

              {/* <!-- Toggle button --> */}
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>

              {/* <!-- Collapsible wrapper --> */}
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {/* <!-- Left links --> */}
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      All Courses
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link class="nav-link" to="">
                      Agent
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      Contact Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <button className="btn btn-theme">Get Started</button>
                  </li>
                  {/* <!-- Navbar dropdown --> */}
                </ul>
                {/* <!-- Left links --> */}

                {/* <!-- Search form --> */}
              </div>
              {/* <!-- Collapsible wrapper --> */}
            </div>
            {/* <!-- Container wrapper --> */}
          </nav>
          {/* <!-- Navbar --> */}
        </div>
      </header>
    </Router>
  );
};

export default Navbar;
