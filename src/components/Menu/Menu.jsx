import React from "react";

import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu">
            <a
                href="https://github.com/FredrikOseberg/react-chatbot-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="menu-link"
            >
                Trang chủ
            </a>
            <a
                href="https://www.npmjs.com/package/react-chatbot-kit"
                className="menu-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Menu
            </a>
            <a href="#examples" className="menu-link">
                Ví dụ
            </a>
            <a href="#tutorials" className="menu-link">
                Tutorials
            </a>
        </div>
    );
};

export default Menu;
