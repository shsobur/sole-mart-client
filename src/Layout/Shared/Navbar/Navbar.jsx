import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { LuUserCircle } from "react-icons/lu";

function Navbar() {
  return (
    <>
      <nav className="navbar_top_main_container">
        <div className="navbar_content_outer_container">
          <div className="navbar_name_container">
            <Link to="/">
              <h2>SoleMart</h2>
            </Link>
          </div>

          <div className="navber_route_top_main_container">
            <ul>
              <li>
                <NavLink>Home</NavLink>
              </li>

              <li>
                <NavLink>Product</NavLink>
              </li>

              <li>
                <NavLink>About Us</NavLink>
              </li>

              <li>
                <NavLink>Contact Us</NavLink>
              </li>

              <li>
                <NavLink>Dashboard</NavLink>
              </li>
            </ul>

            <div className="navber_user_info_container">
              <h3>
                <LuUserCircle />
              </h3>
              <h2>
                <Link to="signIn">Sign In</Link>
              </h2>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
