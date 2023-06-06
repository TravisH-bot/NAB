import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import NavBar from "./components/nav/Nav.component";
import Landing from "./pages/landing/Landing.page";
import About from "./pages/about/About.page";
import Profile from "./pages/profile/Profile.page";
import PartyRegistry from "./pages/registry/Registry.page";
import SignUp from "./pages/signup/Signup.page";
import SignIn from "./pages/signin/Signin.page";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registry" element={<PartyRegistry />} />
      </Routes>
    </>
  );
};

export default App;
