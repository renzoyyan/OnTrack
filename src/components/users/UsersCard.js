import React from "react";

const UsersCard = ({ first_name, last_name, email, lastLoginAt }) => {
  const name = `${first_name} ${last_name}`;
  return (
    <tr>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{name}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{email}</td>

      <td className="px-6 py-4 text-sm whitespace-nowrap">{lastLoginAt}</td>
    </tr>
  );
};

export default UsersCard;
