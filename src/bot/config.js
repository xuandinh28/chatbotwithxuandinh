import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import LearningOptions from "./BotQuestions/Option/LearningOption"
// import ExampleSection from './BotQuestions/PageSections/ExampleSection';

const config = {
    botName: "Restaurant Bot",
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
            widget: "learningOptions",
        })
    ],
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
        // {
        //     widgetName: "JavaScriptLinks",
        //     widgetFunc: (props) => <ExampleSection {...props} />,
        //     props: {
        //         options: [
        //             {
        //                 text: "Introduction to JS",
        //                 url:
        //                     "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
        //                 id: 1,
        //             },
        //             {
        //                 text: "Mozilla JS Guide",
        //                 url:
        //                     "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        //                 id: 2,
        //             },
        //             {
        //                 text: "Frontend Masters",
        //                 url: "https://frontendmasters.com",
        //                 id: 3,
        //             },
        //         ],
        //     },
        // },
        
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
};

export default config;