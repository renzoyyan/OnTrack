import React from "react";
import { CollectionIcon, UsersIcon } from "@heroicons/react/outline";
import Layout from "../components/global/Layout";
import Container from "../components/ui/Container";
import SummaryInfo from "../components/ui/SummaryInfo";
import useUsers from "../utils/users";
import useProducts from "../utils/product";

const DashboardPage = () => {
  const { usersLength, isLoading } = useUsers();
  const { productsLength, isLoading: prodLoading } = useProducts();

  return (
    <Layout>
      <Container>
        <div className="grid grid-cols-3 gap-x-8">
          <SummaryInfo
            Icon={<UsersIcon className="w-6 h-6 text-gray-100" />}
            title={"Users"}
            total={isLoading ? "..." : usersLength}
          />
          <SummaryInfo
            Icon={<CollectionIcon className="w-6 h-6 text-gray-100" />}
            title={"Products"}
            total={prodLoading ? "..." : productsLength}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default DashboardPage;
