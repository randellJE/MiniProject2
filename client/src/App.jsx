import React from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import RLClipsIcon from "./assets/RLClipsIcon.png"

function App() {
  return (
    <>
      <a href="#" target="_blank">
        <img src={RLClipsIcon} className="logo" alt="RLClips logo" width={100}/>
      </a>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePostPage />} />
      </Routes>
    </>
  );
}

export default App;
