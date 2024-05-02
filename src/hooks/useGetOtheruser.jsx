import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOtherUser } from "../redux/userSlice";

const useGetOtheruser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUser = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get("http://localhost:8000/api/v1/user");
        dispatch(setOtherUser(res.data.otherUsers));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUser();
  }, []);
};

export default useGetOtheruser;
