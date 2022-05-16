import React from "react";

import Layout from "../components/global/Layout";
import Container from "../components/ui/Container";
import UsersCard from "../components/users/UsersCard";
import UsersTable from "../components/users/UsersTable";
import { useUserAuth } from "../context/AuthContext";
import useUsers from "../utils/users";

const UsersPage = () => {
  const { user } = useUserAuth();
  const { users, isLoading } = useUsers();

  return (
    <>
      <Layout>
        <Container>
          <h1 className="mt-8 mb-20 text-3xl text-gray-700">Users</h1>

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
            <p className="mt-20 text-sm text-center text-gray-400">Loading..</p>
          )}

          {users.length <= 0 && !isLoading && (
            <p className="mt-20 text-sm font-medium text-center text-gray-400">
              No users found
            </p>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default UsersPage;
