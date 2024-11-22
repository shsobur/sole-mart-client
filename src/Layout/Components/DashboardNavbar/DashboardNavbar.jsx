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
                <li>
                  <NavLink>
                    <p>
                      <GrOverview />
                      OVERVIEW
                    </p>
                  </NavLink>
                </li>

                <li>
                  <NavLink>
                    <p>
                      <LuUsers />
                      ALL USER
                    </p>
                  </NavLink>
                </li>
              </ul>
            )}

            {userRole === "seller" && (
              <ul>
                <li>
                  <NavLink
                    to="/dashboard/addProduct"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "text-[#151515]"
                    }
                  >
                    <p>
                      <MdLibraryAdd />
                      ADD PRODUCT
                    </p>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/productList"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "text-[#151515]"
                    }
                  >
                    <p>
                      <CiCircleList />
                      PRODUCT LIST
                    </p>
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <div className="dashboard_second_section">
            <ul>
              <li>
                <NavLink to="/">
                  <p>
                    <SlHome />
                    HOME
                  </p>
                </NavLink>
              </li>

              <li>
                <NavLink to="/product">
                  <p>
                    <AiOutlineProduct />
                    PRODUCT
                  </p>
                </NavLink>
              </li>

              <li>
                <NavLink>
                  <p>
                    <LiaBookOpenSolid />
                    ABOUT US
                  </p>
                </NavLink>
              </li>

              <li>
                <NavLink>
                  <p>
                    <RiContactsBook3Line />
                    CONTACT US
                  </p>
                </NavLink>
              </li>

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
