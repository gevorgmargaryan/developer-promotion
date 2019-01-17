import React from "react";

const Menu = props =>(
    <header className="">
        <nav className="navbar   navbar-expand-lg navbar-light " style={{backgroundColor: "#8c4673"}}>
            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={props.click}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <button className="btn btn-outline-primary"
                                type="button"
                                onClick={props.pressDev}
                        >Add Developers</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-outline-primary"
                                type="button"
                                onClick={props.pressTra}
                        >Tranings</button>
                        </li>
                </ul>
            </div>
            <h1 >Development</h1>

        </nav>
    </header>


)

export default Menu