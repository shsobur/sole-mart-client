import "./DashboardNavbar.css";
import { GrOverview } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { LuUsers } from "react-icons/lu";
import { SlHome } from "react-icons/sl";
import { AiOutlineProduct } from "react-icons/ai";
import { LiaBookOpenSolid } from "react-icons/lia";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import useUserData from "../../Hooks/UserData/UserData";
import { MdLibraryAdd } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";

const DashboardNavbar = () => {
  const userData = useUserData();
  const userRole = userData.userRole;

  return (
    <>
      <nav className="main_dashboard_top_container">
        <div className="dashboard_title_container">
          <h2>DASHBOARD</h2>
        </div>
        <div className="main_dashboard_route_container">
          <div className="dashboard_first_section">
            {userRole === "admin" && (
              <ul>
                <NavLink>
                  <li>
                    <GrOverview />
                    OVERVIEW
                  </li>
                </NavLink>

                <NavLink>
                  <li>
                    <LuUsers />
                    ALL USER
                  </li>
                </NavLink>
              </ul>
            )}

            {userRole === "seller" && (
              <ul>
                <NavLink to="/dashboard/addProduct">
                  <li>
                    <MdLibraryAdd />
                    ADD PRODUCT
                  </li>
                </NavLink>

                <NavLink>
                  <li>
                    <CiCircleList />
                    PRODUCT LIST
                  </li>
                </NavLink>
              </ul>
            )}
          </div>

          <div className="dashboard_second_section">
            <ul>
              <NavLink to="/">
                <li>
                  <SlHome />
                  HOME
                </li>
              </NavLink>

              <NavLink to="/product">
                <li>
                  <AiOutlineProduct />
                  PRODUCT
                </li>
              </NavLink>

              <NavLink>
                <li>
                  <LiaBookOpenSolid />
                  ABOUT US
                </li>
              </NavLink>

              <NavLink>
                <li>
                  <RiContactsBook3Line />
                  CONTACT US
                </li>
              </NavLink>

              <button>
                Logout
                <IoLogOutOutline />
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavbar;
