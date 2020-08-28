import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#courses">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#contact">Contact Us</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Header;