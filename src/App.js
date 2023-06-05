import { React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import NavBar from "./components/nav/Nav.component";
import Landing from "./pages/landing/Landing.page";
import SignUp from "./pages/signup/Signup.page";
import SignIn from "./pages/signin/Signin.page";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
