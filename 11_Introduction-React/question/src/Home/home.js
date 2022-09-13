import React, { Component } from "react";
import "../asset/css/bootstrap.min.css";
import "../asset/css/main.css";
import Logo from "../asset/img/logo-ALTA@2x.png";
import Profile from "../asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

import { Link } from "react-router-dom";

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="penuh">
        <body className="home-background">
          <header>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="alterra">
                    <a href="index.html">
                      <img className="logo-atas" src={Logo} />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  {/* <div class="container"> */}
                  <div className="row align-items-center navig">
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                      <Link to="/">Home</Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center">
                      <Link to="/about">About</Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left">
                      <a href="#">EXPERIENCE</a>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                      <Link to="/form">Contact</Link>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </header>
          <div className="container h-100">
            <div className="row align-items-center isi-home">
              <div className="col-lg-4 col-md-12 col-sm-12  col-12">
                <img id="foto-profil" src={Profile} />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="main-p">
                  <p className="sapaan">Hi, my name is </p>
                  <p className="nama">Anne Sullivan</p>
                  <p className="hobi">I build things for the web</p>
                  <p className="tombol">
                    <a href="about.html">Get In Touch</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default HomeScreen;