import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import { ConditionallyRender } from "react-util-kit";

import config from './BotConfig/config';
import MessageParser from './BotConfig/MessageParser';
import ActionProvider from './BotConfig/ActionProvider';
import { useState } from 'react';
import { ReactComponent as ButtonIcon } from './Icons/robot.svg';
import GradientBackground from './Components/Pages/GradientBackground/GradientBackground.jsx'
import Menu from './Components/Pages/Menu/Menu.jsx';
// import ExampleSection from './Components/PageSections/ExampleSection.jsx'

function App() {
  const [showChatbot, toggleChatbot] = useState(true);
  return (
    <div>
      <GradientBackground>
        <Menu />
        <h1>Chatbot nhà hàng</h1>
        <div>
          <p>How to work</p>
          <p>example</p>
        </div>
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
      {/* <ExampleSection /> */}

    </div>

  );
}

export default App;
