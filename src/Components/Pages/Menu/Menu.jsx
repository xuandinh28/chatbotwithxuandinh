import React from "react";
import "./Menu.css";

import { ReactComponent as Logo } from "../../../Icons/logo.svg"
const Menu = () => {
    return (
        <div >

            <nav>
                <ul>
                    <li className="logo">
                        <a href="/" className="logo"><Logo /></a>
                    </li>
                    <li>
                        <a href="/">Trang chủ</a>
                    </li>
                    <li>
                        <a href="/">Làng Công nghệ</a>
                    </li>
                    <li>
                        <a href="/">Công nghệ

                        </a>
                    </li>
                    <li>
                        <a href="/">Khoa học</a>
                    </li>
                    <li className="dropdown">
                        <a href="/" className="dropbtn">Cuộc sống</a>
                        <div className="dropdown-content">
                            <a href="/">html</a>
                            <a href="/">html</a>
                            <a href="/">html</a>
                        </div>
                    </li>

                </ul>
            </nav>

        </div>
    );
}

export default Menu;
