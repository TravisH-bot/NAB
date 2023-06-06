import { React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import NavBar from "./components/nav/Nav.component";
import Main from "./components/main/main.component";
import Landing from "./pages/landing/Landing.page";
import About from "./pages/about/About.page";
import Profile from "./pages/profile/Profile.page";
import SignUp from "./pages/signup/Signup.page";
import SignIn from "./pages/signin/Signin.page";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
