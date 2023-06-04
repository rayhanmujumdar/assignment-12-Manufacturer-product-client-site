import { useEffect, useState } from "react";
import axiosPrivate from "../axiosPrivate/axiosPrivate";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState({});
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const admin = async () => {
      if (user?.email) {
        const url = `${process.env.REACT_APP_SERVER_URL}/admin/${user?.email}`;
        const { data } = await axiosPrivate.get(url);
        setLoading(false)
        setAdmin(data.admin);
      }
    };
    admin();
  }, [user]);
  return [admin,loading];
};

export default useAdmin;
