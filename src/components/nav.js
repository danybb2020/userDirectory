import React from "react";
import "../styles/Nav.css";
import SearchBox from "./SearchBox.js";



function Nav ({handleSearchChange}){
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navbarNav">
                <SearchBox handleSearchChange= {handleSearchChange} />

            
        </div>
        </nav>
    );

}

export default Nav