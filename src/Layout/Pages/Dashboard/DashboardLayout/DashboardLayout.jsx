import "./DashboardLayout.css";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../../Components/DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <>
      <div className="main_deshboard_top_container">
        <div className="main_deshboard_sidebar_outer_container">
          <DashboardNavbar></DashboardNavbar>
        </div>

        <div className="main_child_component_outer_container">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
