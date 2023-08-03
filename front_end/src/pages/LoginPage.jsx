import { api } from "../utilities";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(userContext)
  const navigate = useNavigate()

  const logIn = async(e) => {
    e.preventDefault();
    let response = await api.post("users/login/", {
      email: userName,
      password: password,
    });
    console.log(response)
    let token = response.data.token
    let user = response.data.user
    localStorage.setItem("token", token)
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    setUser(user)
    navigate("/home")
  };

  return (
    <form onSubmit={(e) => logIn(e)}>
      <h5>Log In</h5>
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
