import React from "react";
import { ViewGridIcon, UserIcon, CollectionIcon } from "@heroicons/react/solid";
import ActiveLink from "./ActiveLink";
import { Link } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <ViewGridIcon className="w-5 h-5 text-indigo-600" />,
  },
  {
    title: "Users",
    path: "/users",
    icon: <UserIcon className="w-5 h-5 text-indigo-600" />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <CollectionIcon className="w-5 h-5 text-indigo-600" />,
  },
];

const Sidebar = () => {
  return (
    <div
      className={`col-span-1 w-64 bg-white shadow-md h-screen pt-4 duration-300`}
    >
      <div className={`block px-8 gap-x-4`}>
        <Link
          to={"/dashboard"}
          className={`text-indigo-600 text-2xl origin-left font-black duration-200`}
        >
          OnTrack.
        </Link>
      </div>
      <div className="pt-8">
        {menus.map((menu, idx) => (
          <ActiveLink href={menu.path} key={idx}>
            {menu.icon}
            <span className={`origin-left duration-200`}>{menu.title}</span>
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
