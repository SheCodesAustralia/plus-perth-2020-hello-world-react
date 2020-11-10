import React, { useEffect, useState } from "react";
import { Link , useLocation } from "react-router-dom"; 
import "./Nav.css";



function Nav(props) {
    const [isloggedIn, setisloggedin] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
      const token = window.localStorage.getItem("token");
      token != null ? setisloggedin(true) : setisloggedin(false);
    }, [location]);

    const handleLogout = () => {
      window.localStorage.clear();
    };
    
    const { image } = props;

    return (

            <nav className="Navbarcontainer">
                <Link id="Navitem" to="/">HOME</Link>
                {isloggedIn ? (
                    <Link id="Navitem" to="/login" onClick={handleLogout}>
                    LOGOUT
                    </Link>
                ) : (
                    <Link to="/login">LOGIN</Link>
                )}
                <Link id="Navitem" to="/edituserdetails">ACCOUNT</Link>
                <Link id="Navitem" to="/collections/">COLLECTIONS</Link>
            </nav>
      );
    }
    export default Nav;
