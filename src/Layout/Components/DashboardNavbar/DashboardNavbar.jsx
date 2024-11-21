import "./DashboardNavbar.css";
import { GrOverview } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { LuUsers } from "react-icons/lu";
import { SlHome } from "react-icons/sl";
import { AiOutlineProduct } from "react-icons/ai";
import { LiaBookOpenSolid } from "react-icons/lia";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";

const DashboardNavbar = () => {
  return (
    <>
      <nav className="main_dashboard_top_container">
        <div className="dashboard_title_container">
          <h2>DASHBOARD</h2>
        </div>
        <div className="main_dashboard_route_container">

          <div className="dashboard_first_section">
            <ul>

              <NavLink>
                <li>
                  OVERVIEW<GrOverview />
                </li>
              </NavLink>

              <NavLink>
                <li>
                  ALL USER<LuUsers />
                </li>
              </NavLink>

            </ul>
          </div>

          <div className="dashboard_second_section">
            <ul>

              <NavLink to="/">
                <li>
                  HOME<SlHome />
                </li>
              </NavLink>

              <NavLink to="/product">
                <li>
                  PRODUCT<AiOutlineProduct />
                </li>
              </NavLink>

              <NavLink>
                <li>
                  ABOUT US<LiaBookOpenSolid />
                </li>
              </NavLink>

              <NavLink>
                <li>
                  CONTACT US<RiContactsBook3Line />
                </li>
              </NavLink>

              <button>
                Logout<IoLogOutOutline />
              </button>

            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}

export default DashboardNavbar