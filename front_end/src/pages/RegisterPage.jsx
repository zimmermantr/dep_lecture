import { useState, useContext } from "react";
import { userContext } from "../App";
import { api } from "../utilities";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);
  const navigate = useNavigate()

  const signUp = async (e) => {
    e.preventDefault();
    let response = await api.post("users/register/", {
      email: userName,
      password: password,
    });
    let user = response.data.user;
    let token = response.data.token;
    // Store the token securely (e.g., in localStorage or HttpOnly cookies)
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    // set the user using with useContext to allow all other pages that need user information
    setUser(user);
    navigate("/home")
  };

  return (
    <form onSubmit={(e) => signUp(e)}>
      <h5>Sign Up</h5>
      <input
        type="email"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};
