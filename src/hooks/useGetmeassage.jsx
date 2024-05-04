import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { baseUrl } from "../baseUrl";

const useGetmeassage = () => {
  const { seletedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMeassges = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${baseUrl}/api/v1/message/${seletedUser?._id}`
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
