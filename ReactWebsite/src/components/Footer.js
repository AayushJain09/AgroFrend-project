import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Agro<span>Frend</span>
        </h3>

        <p className="footer-links">
          <a href="/" className="link-1">
            Home
          </a>

          <a href="/crop">Crop</a>

          <a href="/soil">Soil</a>

          <a href="/about">About</a>

          <a href="/schemes">Schemes</a>

          <a href="/community">Community</a>
        </p>

        <p className="footer-company-name">AgroFrend © {new Date().getFullYear()}</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>GGITS</span> Jabalpur, Madhya Pradesh
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+91-8878660999</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:ayushandy404@gmail.com">ayushandy404@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About Us</span>
          Complete Farming support for the backbone of out nation, our AgroFrend
        </p>

        <div className="footer-icons">
          <a href="/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
