import React from "react";

const UsersTable = ({ children }) => {
  return (
    <div className="overflow-auto">
      <div className="inline-block min-w-full align-middle min-h-96">
        <div className="border border-gray-100 rounded-md">
          <table className="min-w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky z-10 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 bg-indigo-100 border-b border-indigo-100 -top-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="sticky z-10 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 bg-indigo-100 border-b border-indigo-100 -top-0"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="sticky z-10 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 bg-indigo-100 border-b border-indigo-100 -top-0"
                >
                  Created at
                </th>

                <th
                  scope="col"
                  className="sticky z-10 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 bg-indigo-100 border-b border-indigo-100 -top-0"
                >
                  Status
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

export default UsersTable;
