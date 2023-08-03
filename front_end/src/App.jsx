import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { createContext } from "react";
import { api } from "./utilities";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const lastVisited = useRef();

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    whoAmI();
  }, []);

  useEffect(() => {
    if (!user) {
      lastVisited.current = location.pathname;
    }
  }, [location]);

  const logOut = async () => {
    let response = await api.post("users/logout/");
    if (response.status === 204) {
      // Remove the token from secure storage (e.g., localStorage)
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
      // set the user using with useContext to allow all other pages that need user information
      setUser(null);
      navigate("/login");
    }
  };

  const whoAmI = async () => {
    let token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Token ${token}`;
      let response = await api.get("users/");
      if (response.data.email) {
        setUser(response.data);
        if (lastVisited.current) {
          navigate(lastVisited.current);
        } else {
          navigate("/home");
        }
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div id="app">
      <header>
        <nav>
          {user ? (
            <>
              <Link to="/home">Home</Link>
              <Link to="/lists">Lists</Link>
              <button onClick={logOut}>Log out</button>
            </>
          ) : (
            <>
              <Link to="/">Register</Link>
              <Link to="/login">Log In</Link>
            </>
          )}
        </nav>
      </header>
      <userContext.Provider value={{ user, setUser }}>
        <Outlet />
      </userContext.Provider>
    </div>
  );
}

export default App;
