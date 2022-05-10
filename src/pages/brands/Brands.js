import React from "react";
import { Link } from "react-router-dom";
import BrandsCard from "../../brands/BrandsCard";
import BrandsTable from "../../brands/BrandsTable";
import Layout from "../../components/global/Layout";
import Container from "../../components/ui/Container";

const data = [
  {
    name: "Nike",
    date: "05/10/2022",
  },
  {
    name: "Addidas",
    date: "05/10/2022",
  },
];

const BrandsPage = () => {
  return (
    <Layout>
      <Container>
        <div className="flex items-center justify-between mt-8 mb-20">
          <h1 className="text-3xl text-gray-700 ">Brands</h1>
          <Link
            to="/brands/new"
            className="px-6 py-2 text-sm font-medium text-white transition duration-150 bg-indigo-700 rounded-md focus:ring-offset-2 ring-2 ring-indigo-700 font-open-sans hover:bg-indigo-700/95 hover:ring-indigo-700/95"
          >
            + Add Brands
          </Link>
        </div>

        <BrandsTable>
          {data.map((val, idx) => (
            <BrandsCard key={idx} name={val.name} date={val.date} />
          ))}
        </BrandsTable>
      </Container>
    </Layout>
  );
};

export default BrandsPage;
