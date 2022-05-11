import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Spinner = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SyncLoader loading={loading} color="#4f46e5" size={15} />
    </div>
  );
};

export default Spinner;
