import React from "react";
import ActiveLink from "./ActiveLink";
import { menus } from "../../utils/menus";

const Sidebar = () => {
  return (
    <div
      className={`hidden md:sticky md:block top-0 md:w-52 lg:w-60 bg-white shadow-md h-full duration-300`}
    >
      <div className="pt-8">
        {menus.map((menu, idx) => (
          <ActiveLink href={menu.path} key={idx}>
            <span className="flex-shrink-0">{menu.icon}</span>
            <span className={`origin-left duration-200 inline-block`}>
              {menu.title}
            </span>
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
