import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="page-footer footer-color">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Company Bio</h5>
            <p className="grey-text text-lighten-4">
              We are a team of college students working on this project like
              its our full time job. Any amount would help support and continue
              development on this project and is greatly appreciated.
            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Settings</h5>
            <ul>
              <li>
                <a className="white-text" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Contact</h5>
            <ul>
              <li>
                <a  className="white-text" href="mailto:olivia.oddo@gmail.com?Subject=Contact%Olivia" target="_top">olivia.oddo@gmail.com</a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Made by  Olivia Oddo
        </div>
      </div>
    </footer>
  );
}
