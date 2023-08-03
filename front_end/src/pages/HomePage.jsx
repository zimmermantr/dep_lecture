import { useEffect, useContext } from "react";
import { userContext } from "../App";

export const HomePage = () => {
  const { user } = useContext(userContext);

  return (
    <div>
      <h1>Welcome {user ? user.email : null}</h1>
    </div>
  );
};
