import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: "https://sole-mart-db-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Something went wrong! Error ${error.response.status}`,
            footer: "Unauthorized access",
          });
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;