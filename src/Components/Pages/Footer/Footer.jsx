import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <div class="row">
            <div class="column" >
                <h2>Column 1</h2>
                <p>Some text..</p>
            </div>
            <div class="column" style={{ backgroundColor: "lightblue" }}>
                <h2>Column 2</h2>
                <p>Some text..</p>
            </div>
        </div>
    );
}

export default Footer;