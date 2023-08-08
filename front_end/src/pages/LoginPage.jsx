import { useState, useContext } from "react";
import { userContext } from "../App";
import { api } from "../utilities";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    // "http://127.0.0.1:8000/api/"
    let response = await api.post("users/login/", {
      email: userName,
      password: password,
    });
    console.log(response)
    // expected response
    // {"user": {"email": user.email}, "token": token.key}, status=HTTP_201_CREATED
    let user = response.data.user;
    let token = response.data.token;
    setUser(user);
    localStorage.setItem("token", token);
    navigate("/home");
  };

  return (
    <form onSubmit={(e) => login(e)}>
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
