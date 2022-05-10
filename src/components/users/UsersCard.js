import React from "react";

const UsersCard = ({ first_name, last_name, email, createdAt, status }) => {
  const name = `${first_name} ${last_name}`;
  return (
    <tr>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{name}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{email}</td>

      <td className="px-6 py-4 text-sm whitespace-nowrap">{createdAt}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 py-1 text-xs font-medium rounded-lg ${
            status === "Online"
              ? "text-green-500 bg-green-100"
              : "text-red-500 bg-red-100"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
};

export default UsersCard;
