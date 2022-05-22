import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import MainContent from "../ui/MainContent";
import { useUserAuth } from "../../context/AuthContext";
import MobileMenu from "../ui/MobileMenu";

const Layout = ({ children }) => {
  const { logoutUser, user } = useUserAuth();
  const navigate = useNavigate();

  return (
    <>
      <header className="flex items-center justify-between px-4 py-4 space-x-4 text-sm font-medium bg-white border-b border-gray-100 md:px-8">
        <Link to={"/dashboard"} className={`logo`}>
          OnTrack.
        </Link>
        <div className="items-center hidden space-x-4 text-gray-800 md:flex">
          <p>{user?.displayName}</p>
          <button
            onClick={async () => {
              await logoutUser();
              navigate("/");
            }}
          >
            <span className="text-sm font-medium text-red-500">Logout</span>
          </button>
        </div>

        <MobileMenu />
      </header>

      <MainContent>
        <Sidebar />

        <div className="md:col-start-2 md:col-end-4">{children}</div>
      </MainContent>
    </>
  );
};

export default Layout;
