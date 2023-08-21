import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
    return(
        <div className="navbar">

            <div className="links">
                <Link to="/">Shop</Link>
                <Link to="/Cart">
                    <ShoppingCart size={30}/>
                </Link>
            </div>
            
            
        </div>
    )

}

export default Navbar