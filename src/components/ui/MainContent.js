import React from "react";

const MainContent = ({ children }) => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-[13rem_1fr] lg:grid-cols-[15rem_1fr] bg-gray-50">
      {children}
    </div>
  );
};

export default MainContent;
