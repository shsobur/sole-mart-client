import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://sole-mart-db-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;