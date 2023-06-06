import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AdminHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="uppercase text-3xl mt-12 ml-6">hi, welcome back!</h2>
    </div>
  );
};

export default AdminHome;
