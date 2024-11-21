import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../AxiosPublic/AxiosPublic";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const useUserData = () => {
  const axiosPublic = useAxiosPublic();
  const [userData, setUserData] = useState([]);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    const fatchUserData = async () => {
      const res = await axiosPublic.get(`/user-data/${user.email}`);
      setUserData(res.data);
    };

    if (user?.email && !loading) {
      fatchUserData();
    }
  }, [user, loading, axiosPublic]);

  return userData;
};

export default useUserData;