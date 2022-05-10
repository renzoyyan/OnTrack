import React from "react";
import { CollectionIcon, TagIcon, UsersIcon } from "@heroicons/react/outline";
import Layout from "../components/global/Layout";
import Container from "../components/ui/Container";
import SummaryInfo from "../components/ui/SummaryInfo";

const DashboardPage = () => {
  return (
    <Layout>
      <Container>
        <div className="grid grid-cols-3 gap-x-8">
          <SummaryInfo
            Icon={<UsersIcon className="w-6 h-6 text-gray-100" />}
            title={"Users"}
            total={"10"}
          />
          <SummaryInfo
            Icon={<CollectionIcon className="w-6 h-6 text-gray-100" />}
            title={"Products"}
            total={"12"}
          />
          <SummaryInfo
            Icon={<TagIcon className="w-6 h-6 text-gray-100" />}
            title={"Brands"}
            total={"15"}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default DashboardPage;
