import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetmeassage = () => {
  const { seletedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMeassges = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8000/api/v1/message/${seletedUser?._id}`
        );

        dispatch(setMessages(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeassges();
  }, [seletedUser]);
};

export default useGetmeassage;
