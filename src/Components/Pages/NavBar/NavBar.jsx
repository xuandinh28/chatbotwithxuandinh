import React from "react";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className=".schedule">
            <div class="row">
                <div class="column" style={{backgroundColor: "red"}}>
                    <p>Home</p>
                </div>
                <div class="column" >
                    <p>Menu</p>
                    {/* <div class="row">
                        Row insite column 2 1
                    </div>
                    <div class="row">
                        Row insite column 2 2
                    </div> */}
                </div>
                    

                <div class="column" >
                    <p>About</p>
                </div>
                <div class="column" >
                    <p>Page</p>
                </div>
                <div class="column" >
                    <p>Contract</p>
                </div>
            </div>
        </div>
    );
}

export default NavBar;