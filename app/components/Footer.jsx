import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="page-footer footer-color">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text intro">About</h5>
            <p className="grey-text text-lighten-4 intro">

            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text intro">Connect</h5>
            <ul>
              <li>
                    <span className='icon-pad'>
                    <a href="https://github.com/oliviaoddo" target="_blank">
                      <i
                        className="fa fa-github fa-lg icon-white"
                        aria-hidden="true"
                      />
                    </a>
                  </span>
                  <span className='icon-pad'>
                    <a
                      href="https://linkedin.com/in/olivia-oddo"
                      target="_blank"
                    >
                      <i
                        className="fa fa-linkedin-square fa-lg icon-white"
                        aria-hidden="true"
                      />
                    </a>
                    </span>
                    <span className='icon-pad'>
                    <a href="https://medium.com/@oliviaoddo" target="_blank">
                      <i
                        className="fa fa-medium fa-lg icon-white"
                        aria-hidden="true"
                      />
                    </a>
                    </span>
                    </li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text intro">Contact</h5>
            <ul>
              <li>
                <a className="white-text intro" href="mailto:olivia.oddo@gmail.com?Subject=Contact%20Olivia" target="_top">olivia.oddo@gmail.com</a>
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
