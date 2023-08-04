import { useState} from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { createContext } from "react";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    <div id="app">
      <header>
        <nav>
              <Link to="/home">Home</Link>
              <Link to="/lists">Lists</Link>
              <button onClick={()=>setUser(null)}>Log out</button>
              <Link to="/">Register</Link>
              <Link to="/login">Log In</Link>
        </nav>
      </header>
      <userContext.Provider value={{ user, setUser }}>
        <Outlet />
      </userContext.Provider>
    </div>
  );
}

export default App;
