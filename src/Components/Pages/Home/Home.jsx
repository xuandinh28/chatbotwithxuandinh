import React from "react";
import DocsContainer from "../DocsContainer/DocsContainer";
import "./Home.css"

const HomePage = () => {
    return (
        <div className="app-config-section">
            <DocsContainer 
                title={HomePage}
            >
                <p>Test Home Page</p>
            </DocsContainer>
        </div>
    );
}

export default HomePage;