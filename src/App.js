import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import NavBar from "./components/nav/Nav.component";
import Landing from "./pages/landing/Landing.page";
import About from "./pages/about/About.page";
import Profile from "./pages/profile/Profile.page";
import PartyRegistries from "./pages/registries/Registries.page";
import SignUp from "./components/auth/signup/Signup.page";
import SignIn from "./components/auth/signin/Signin.page";
// import AuthDetails from "./components/AuthDetails";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const App = () => {
  return (
    <>
      <NavBar />
      {/* <AuthDetails /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/registry"
          element={<PartyRegistries registries={DATA} />}
        />
      </Routes>
    </>
  );
};

export default App;
