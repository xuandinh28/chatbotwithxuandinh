import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import { ConditionallyRender } from "react-util-kit";
import { useState } from 'react';


import config from './BotConfig/config';
import MessageParser from './BotConfig/MessageParser';
import ActionProvider from './BotConfig/ActionProvider';
import './App.css';

import { ReactComponent as ButtonIcon } from './Icons/robot.svg';

import GradientBackground from './Components/Pages/GradientBackground/GradientBackground.jsx';
import NavBar from './Components/Pages/NavBar/NavBar.jsx';
import Menu from './Components/Pages/Menu/Menu.jsx';
import HomePage from './Components/Pages/Home/Home.jsx';
import Footer from './Components/Pages/Footer/Footer.jsx';

// import ExampleSection from './Components/PageSections/ExampleSection.jsx'

function App() {
  const [showChatbot, toggleChatbot] = useState(true);
  return (
    <div>
      <GradientBackground>
        <Menu />
        <NavBar />
        <HomePage />
        <Footer />
        
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
        
      </GradientBackground>

    </div>

  );
}

export default App;
