import React from "react";
import { Button } from "react-bootstrap";

import { useUserAuth } from "../context/UserAuthContext";

const Homes = () => {
  const { logOut, user } = useUserAuth();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Homes;