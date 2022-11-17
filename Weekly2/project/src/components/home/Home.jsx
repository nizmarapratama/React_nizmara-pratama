import React from "react";

class Home extends React.Component{
    render() {
      return (
        <div>
          <title>MYMONEY</title>
          <section id="header">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#007997f6" className="bi bi-wallet" viewBox="0 0 16 16">
                    <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
                  </svg>
                  <a className="navbar-brand theme-text" href="#">
                    &nbsp;MYMONEY</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link act" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Our Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#ContactUs">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="middle">
                <h1 className="text-white display-3 fw-bold">We Help you to keep <span className="theme-text">your money safe</span>.</h1>
              </div>
            </div>
          </section>
        </div>
      );
    }
  };

  export default Home;