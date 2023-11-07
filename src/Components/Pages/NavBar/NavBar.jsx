import React from "react";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className=".schedule">
            <div class="row">
                <div class="column" style={{backgroundColor: "red"}}>
                    <p>Column 1</p>
                </div>
                <div class="column" >
                    <p>Column 2</p>
                    {/* <div class="row">
                        Row insite column 2 1
                    </div>
                    <div class="row">
                        Row insite column 2 2
                    </div> */}
                </div>
                    

                <div class="column" >
                    <p>Column 3</p>
                </div>
                <div class="column" >
                    <p>Column 4</p>
                </div>
                <div class="column" >
                    <p>Column 5</p>
                </div><div class="column" >
                    <p>Column 6</p>
                </div><div class="column" >
                    <p>Column 7</p>
                </div>
            </div>
        </div>
    );
}

export default NavBar;