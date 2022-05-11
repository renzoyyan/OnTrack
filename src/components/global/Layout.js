import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import MainContent from "../ui/MainContent";
import { useUserAuth } from "../../context/AuthContext";

const Layout = ({ children }) => {
  const { logoutUser, user } = useUserAuth();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-6">
      <Sidebar />
      <MainContent>
        <header className="flex items-center space-x-4 justify-end px-8 text-sm font-medium bg-white border-b border-gray-100">
          <span>{user?.displayName}</span>
          <button
            onClick={async () => {
              await logoutUser();
              navigate("/");
            }}
            className="flex items-center py-3 pl-3 space-x-2 text-sm text-gray-900 transition duration-150 ease-out"
          >
            <span className="text-red-500">Logout</span>
          </button>
        </header>
        {children}
      </MainContent>
    </div>
  );
};

export default Layout;
