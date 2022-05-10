import React from "react";

const SummaryInfo = ({ Icon, title, total }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-md shadow-sm gap-x-4">
      <div className="px-4 py-4 bg-indigo-900 rounded-lg">{Icon}</div>
      <div className="font-open-sans">
        <h2 className="text-sm font-semibold text-gray-400">{title}</h2>
        <span className="text-xl font-bold">{total}</span>
      </div>
    </div>
  );
};

export default SummaryInfo;
