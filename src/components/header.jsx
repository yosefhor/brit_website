import React from "react";
import logo from "../logo.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import { AboutMe } from "./aboutMe.jsx";

function Navbar() {
    return (
        <header className=" sticky-top">
            <div className=" px-3 container-fluid align-content-center " style={{ backgroundColor: '#dbf3fa', height: '6em' }}>
                <div className="row align-items-center">
                    <div className="col-auto mx-3">
                        <a href="/">
                            <img src={logo} alt="Logo" className="me-5 mx-md-5 rounded-3 shadow" style={{ height: '5em' }} />
                        </a>
                    </div>
                    <div className="col">
                        <h1 className="text-danger fs-2">Rabbiner David Goldberg - Beschneidungen</h1>
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <nav className="container navbar navbar-expand-sm px-2">
                    <a className=" d-sm-none navbar-brand" href="/">Rabbiner David Goldberg</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <div className=" navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="aboutMe">About me</a>
                            <a className="nav-link" href="aboutBritMilah">About Brit Milah</a>
                            <a className="nav-link" href="costs">Costs</a>
                            <a className="nav-link" href="contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default Navbar