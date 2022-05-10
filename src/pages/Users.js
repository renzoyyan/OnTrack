import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import Layout from "../components/global/Layout";
import Container from "../components/ui/Container";
import UsersCard from "../components/users/UsersCard";
import UsersTable from "../components/users/UsersTable";
import { db } from "../config/firebase";
import { useUserAuth } from "../context/AuthContext";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUserAuth();

  useEffect(() => {
    setIsLoading((prev) => !prev);
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        setUsers((prev) => [...prev, { id: doc.id, ...doc.data() }]);
        setIsLoading((prev) => !prev);
      });
    };

    getUsers();
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <h1 className="text-3xl text-gray-700 mt-8 mb-20">Users</h1>

          <UsersTable>
            {users?.map((userData) => (
              <UsersCard
                key={userData.id}
                first_name={userData.first_name}
                last_name={userData.last_name}
                email={userData.email}
                createdAt={userData.timeStamp}
                status={user?.email === userData.email ? "Online" : "Offline"}
              />
            ))}
          </UsersTable>
          {isLoading && (
            <p className="text-sm text-center mt-20 text-gray-400">Loading..</p>
          )}

          {users.length <= 0 && !isLoading && (
            <p className="text-gray-400 text-sm font-medium text-center mt-20">
              No users found
            </p>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default UsersPage;
