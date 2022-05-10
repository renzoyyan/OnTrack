import React from "react";

const BrandsCard = ({ name, date }) => {
  return (
    <tr>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{name}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{date}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">
        <div className="space-x-4 text-right">
          <span className="cursor-pointer text-sm text-amber-500 hover:underline">
            Edit
          </span>
          <span className="cursor-pointer text-sm text-red-500 hover:underline">
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
};

export default BrandsCard;
