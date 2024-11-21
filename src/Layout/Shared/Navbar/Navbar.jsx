import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { LuUserCircle } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

function Navbar() {
  const { logOut, user } = useContext(AuthContext);

  const handleSignOut = () => {
    // Sweet Alert to log out__ __ __!
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#2563eb",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      // Confirmation to logout__ __ __!
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            title: "Loged Out!",
            text: "Loged out successfully",
            icon: "success",
          });
        });
      }
    });
  };

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
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/product">Product</NavLink>
              </li>

              <li>
                <NavLink>About Us</NavLink>
              </li>

              <li>
                <NavLink>Contact Us</NavLink>
              </li>

              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>

            <div className="navber_user_info_container">
              <h3>{user ? <LuUserCircle /> : ""}</h3>

              <h2>
                {user ? (
                  <button onClick={handleSignOut}>Sign Out</button>
                ) : (
                  <Link to="signIn">Sign In</Link>
                )}
              </h2>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
