import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const usersLength = users?.length;

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        setUsers((prev) => [...prev, { id: doc.id, ...doc.data() }]);
        setIsLoading(false);
      });
    };

    getUsers();
  }, []);

  return { users, isLoading, usersLength };
};

export default useUsers;
