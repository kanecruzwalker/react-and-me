import React, { useState } from "react";
import { Link, useLocation, } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Collapse from "react-bootstrap/Collapse";

function NavBar() {
    const [open, setOpen] = useState(false);


    const location = useLocation();
    const linkClassName = (linkPath) => {
        if (linkPath === location.pathname) {
            return "nav-link active";
        }
        return "lav-link";
    };

    return (
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light" >

            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                New Page?
            </Button>


            <Collapse in={open}>
                <div id="example-collapse-text">
                    <ul className="navbar-name">
                        <li className="nav-item">
                            <Link to="/about" className={linkClassName("/about")}>
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className={linkClassName("/portfolio")}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={linkClassName("/contact")}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </Collapse>

            {/* <Button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </Button> */}
        </Navbar >
    );

}

export default NavBar;