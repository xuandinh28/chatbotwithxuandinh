import './App.css';

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';

import ActionProvider from "./bot/ActionProvider";
import config from "./bot/config";
import MessageParser from "./bot/MessageParser";

import { ConditionallyRender } from "react-util-kit";
import { useState } from 'react';


import { ReactComponent as ButtonIcon } from './Icons/robot.svg';


import NavBar from "./components/NavBar";
import Home from "../src/pages/Home";
import Menu from "../src/pages/Menu";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import Cart from "../src/pages/Cart";
import NoPage from "../src/pages/NoPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer";



function App() {
  const [showChatbot, toggleChatbot] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="join" element={<SignUp />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <div className="App-chatbot-container">
        <ConditionallyRender
          ifTrue={showChatbot}
          show={
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          }
        />
      </div>
      <button
        className="App-chatbot-button"
        onClick={() => toggleChatbot((prev) => !prev)}
      >
        <ButtonIcon className="app-chatbot-button-icon" />
      </button>
    </>
  );
}

export default App;