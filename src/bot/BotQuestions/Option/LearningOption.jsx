import React from "react";

import "./LearningOption.css";

const LearningOptions = (props) => {
    const options = [
        { 
            text: "Pizza", 
            handler: props.actionProvider.handlePizza, 
            id: 1, 
        },
        { text: "Burger", 
            handler: props.actionProvider.handleExampleSection, 
            id: 2 
        },
        { text: "Pasta", 
            handler: props.actionProvider.handleExampleSection, 
            id: 3 },
        { text: "Cola", 
            handler: props.actionProvider.handleExampleSection,
            id: 4 },
        /*{ text: "Interview prep", handler: () => { }, id: 5 },*/
        /*{ text: "Interview prep", handler: () => { }, id: 6 },*/
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;


