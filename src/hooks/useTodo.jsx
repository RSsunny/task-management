import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import getDate from "../utility/getDate";
import useAuth from "./useAuth";

const useTodo = () => {
  const { user } = useAuth();
  const axios = useAxiosPublic();
  const { data, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axios(`/todo?email=${user?.email}`);
      return res.data;
    },
  });

  const today = getDate();

  const todayList = data?.data?.filter((items) => items.date === today);
  const ongoingList = data?.data?.filter((items) => items.date !== today);

  const todotask = todayList?.filter((items) => items.status === "incomplete");
  const completetask = todayList?.filter(
    (items) => items.status === "complete"
  );
  return { data, refetch, todotask, completetask, ongoingList };
};

export default useTodo;
