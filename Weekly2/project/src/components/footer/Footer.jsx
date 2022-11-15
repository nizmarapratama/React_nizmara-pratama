import React from "react";

class Footer extends React.Component {
    render () {
        return (
            <div>
            <header>
            {/* <h1>Weekly 1</h1>
            <h2>My Money Footer</h2> */}
            <footer className="footer">
              <div className="footer-left">
                <h4>MyMoney digital</h4>
                <div className="credit-cards">
                  <img src="assets/img/footer-brand.png" alt="" />
                </div>
                <p className="footer-copyright">2022 Aracoding</p>
              </div>
              <div className="footer-center">
                <div>
                  <i className="fa fa-map-marker" />
                  <p><span>Indonesia</span> Jl. Pancawarga 1 GG 17 Cipinang Besar Selatan Jakarta Timur</p>
                </div>
                <div>
                  <i className="fa fa-phone" />
                  <p>+62 0878-8888-7777</p>
                </div>
                <div>
                  <i className="fa fa-envelope" />
                  <p><a href="#">nizmarapratama.np@gmail.com</a></p>
                </div>
              </div>
              <div className="footer-right">
                <p className="footer-about">
                  <span>About</span>
                  Website MyMoney digital ini bertujuan untuk membangun dompet digital/dompet online agar pelanggan membayar produk atau layanan. Di toko bata-dan-mortir, metode pembayaran yang diterima dapat mencakup uang tunai, kartu hadiah, kartu kredit, kartu prabayar, kartu debit, atau pembayaran seluler.
                </p>
                <div className="footer-media">
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-instagram" /></a>
                  <a href="#"><i className="fa fa-linkedin" /></a>
                </div>
              </div>
            </footer>
          </header>
          </div>
        );
      }
    };

    export default Footer;