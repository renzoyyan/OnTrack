import { CollectionIcon, UserIcon, ViewGridIcon } from "@heroicons/react/solid";

export const menus = [
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
