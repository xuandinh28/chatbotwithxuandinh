import React from "react";
import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu">
            <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="menu-link"
            >
                Trang chủ
            </a>
            <a
                href="/"
                className="menu-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Menu
            </a>
            <a href="#examples" className="menu-link">
                Về chúng tôi
            </a>
            <a href="#tutorials" className="menu-link">
                Tutorials
            </a>
        </div>
    );
};

export default Menu;
