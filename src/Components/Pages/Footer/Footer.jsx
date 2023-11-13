import React from "react";
import "./Footer.css"
import DocsContainer from "../DocsContainer/DocsContainer";
const Footer = () => {
    return (
        <div className="app-config-section">
            <DocsContainer
                title={Footer}
            >
                <p>Test footer</p>
            </DocsContainer>
        </div>
    );
}

export default Footer;