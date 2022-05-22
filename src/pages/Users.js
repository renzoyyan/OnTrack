import React from "react";

import Layout from "../components/global/Layout";
import Container from "../components/ui/Container";
import UsersCard from "../components/users/UsersCard";
import UsersTable from "../components/users/UsersTable";
import { formatDateWithTime } from "../utils/formatDate";
import useUsers from "../utils/users";

const UsersPage = () => {
  const { users, isLoading } = useUsers();

  return (
    <>
      <Layout>
        <Container>
          <h1 className="mt-2 mb-10 text-3xl text-gray-700 md:mt-8 md:mb-20">
            Users
          </h1>

          <UsersTable>
            {users?.map((userData) => (
              <UsersCard
                key={userData.id}
                first_name={userData.first_name}
                last_name={userData.last_name}
                email={userData.email}
                lastLoginAt={formatDateWithTime(userData.lastLoginAt)}
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
