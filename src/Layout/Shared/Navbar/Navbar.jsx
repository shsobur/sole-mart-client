import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { LuUserCircle } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useUserData from "../../Hooks/UserData/UserData";
import { BsCartPlusFill } from "react-icons/bs";
import { TfiHarddrives } from "react-icons/tfi";

function Navbar() {
  const { logOut, user } = useContext(AuthContext);
  const userData = useUserData();
  const userRole = userData.userRole;

  const handleSignOut = () => {
    // Sweet Alert to log out__ __!
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#2563eb",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      // Confirmation to logout__ __!
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

              {user && (
                <li>
                  {userRole === "admin" || userRole === "seller" ? (
                    <NavLink
                      to={
                        userRole === "admin"
                          ? "/dashboard/allUser"
                          : "/dashboard/addProduct"
                      }
                    >
                      Dashboard
                    </NavLink>
                  ) : (
                    ""
                  )}
                </li>
              )}
            </ul>

            <div>
              {userData.userRole === "buyer" && (
                <div className="navbar_cart_user_info_container">
                  <div title="Cart" className="navbar_cart_info_container">
                    <h3>
                      <BsCartPlusFill />
                    </h3>
                    <span>99</span>
                  </div>

                  <div title="Wish list" className="navbar_cart_info_container">
                    <h3>
                      <TfiHarddrives />
                    </h3>
                    <span>99</span>
                  </div>
                </div>
              )}
            </div>

            <div className="navber_user_info_container">
              <h3 title={user?.email}>{user ? <LuUserCircle /> : ""}</h3>

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
