import React from 'react';
import Nav from "./Nav";
import Cop from "./Cop";

function Footer(props) {
    return (
        <div className="footer">
           <Nav />
           <Cop />
        </div>
    );
}

export default Footer;