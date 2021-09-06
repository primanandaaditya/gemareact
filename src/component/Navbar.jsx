import React from "react";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i
                            className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/satu" className="nav-link">Satu</Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/dua" className="nav-link">Dua</Link>
                    </li>
                </ul>


                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">

                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input className="form-control form-control-navbar" type="search"
                                           placeholder="Search" aria-label="Search"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-navbar" type="submit">
                                                <i className="fas fa-search"></i>
                                            </button>
                                            <button className="btn btn-navbar" type="button"
                                                    data-widget="navbar-search">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                            <i className="fas fa-th-large"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}