import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import "./App.css";
import UsersDataTable from "./components/UsersDataTable";

function App() {
  const [allUsers, setAllUsers] = useState({});

  const UserDetails = (data) => {
    setAllUsers(data);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpForm UserDetails={UserDetails} />} />
          <Route path="login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
      <hr />
      <UsersDataTable usersData={allUsers} />
    </div>
  );
}

export default App;
