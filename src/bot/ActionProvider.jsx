//import React from 'react';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Heo Béo xin chào ạ!")
        this.updateChatbotState(greetingMessage)
    }
    /*greet() {
        const greetingMessage = this.createChatBotMessage("Khách hàng cần trợ giúp gì ạ?")
        this.updateChatbotState(greetingMessage)
    }*/
    handleExampleSection = () => {
        const message = this.createChatBotMessage(
            "het hang ok",
            {
                widget: "JavaScriptLinks",
            }
        );

        this.updateChatbotState(message);
    };
    handlePizza = () => {
        const message = this.createChatBotMessage(
            "het hang Pizza",
            {
                widget: "JavaScriptLinks",
            }
        );

        this.updateChatbotState(message);
    };

    updateChatbotState(message) {

        // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.


        this.setState(prevState => ({
            ...prevState, 
            messages: [...prevState.messages, message]
        }));
    }
}

export default ActionProvider;