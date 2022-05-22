import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { menus } from "../../utils/menus";
import ActiveLink from "./ActiveLink";
import { useUserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MobileMenu() {
  const { logoutUser, user } = useUserAuth();
  const navigate = useNavigate();

  return (
    <div className="md:hidden">
      <Menu as="div" className="relative block text-left">
        <div className="h-5">
          <Menu.Button className="w-full h-full">
            <MenuIcon
              className="h-full text-gray-700 cursor-pointer"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-20 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {menus.map((menu, idx) => (
              <Menu.Item as="div" key={idx}>
                <ActiveLink href={menu.path} key={idx}>
                  <span className="flex-shrink-0">{menu.icon}</span>
                  <span className={`origin-left duration-200 inline-block`}>
                    {menu.title}
                  </span>
                </ActiveLink>
              </Menu.Item>
            ))}

            <Menu.Item as="div">
              <div className="flex items-center justify-between p-4 space-x-4">
                <p className="text-sm text-gray-800">{user?.displayName}</p>
                <button
                  onClick={async () => {
                    await logoutUser();
                    navigate("/");
                  }}
                >
                  <span className="text-sm font-medium text-red-500">
                    Logout
                  </span>
                </button>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
