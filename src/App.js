import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import AdminLogin from "./components/admin/adminlogin";
import "./App.css";

function App() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [user, setLoginUser] = useState(userData || null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user ? (
                <Home
                  user={user}
                  userId={user._id}
                  userRole={user.role}
                  userClass={user.class}
                  userGroup={user.group}
                  setLoginUser={setLoginUser}
                />
              ) : (
                <Login setLoginUser={setLoginUser} replace to={"/login"} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route
            path="/admin"
            element={<AdminLogin setLoginUser={setLoginUser} />}
          />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
