import React from "react";

const ProductsTable = ({ children }) => {
  return (
    <div className="flex-grow overflow-auto">
      <div className="inline-block min-w-full align-middle min-h-96">
        <div className="border border-gray-100 rounded-md">
          <table className="relative min-w-full border">
            <thead>
              <tr>
                <th scope="col" className="products_heading">
                  Name
                </th>
                <th scope="col" className="products_heading">
                  Brand
                </th>
                <th scope="col" className="products_heading">
                  Category
                </th>
                <th scope="col" className="products_heading">
                  Sizes
                </th>
                <th scope="col" className="products_heading">
                  Colors
                </th>
                <th scope="col" className="products_heading">
                  Price
                </th>
                <th scope="col" className="products_heading">
                  Stocks
                </th>
                <th scope="col" className="products_heading">
                  Release date
                </th>
                <th scope="col" className="products_heading">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {children}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
