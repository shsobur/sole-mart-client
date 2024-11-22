import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Layout/Components/AuthProvider/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <div className="w-full mt-5 mb-5 gap-5 flex justify-center flex-col items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#7c6a46]"></div>
          <h1 className="text-3xl text-center font-bold text-[#7c6a46]">
            loading...
            <br />
            <span className="text-lg font-semibold"> Please wait!</span>
          </h1>
        </div>
      </>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin"></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
