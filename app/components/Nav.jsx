import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div class="navbar-fixed">
        <nav class="transparent z-depth-0">
          <div class="nav-wrapper">
            <div class="row">
              <div class="col s12">
                <a
                  href="#"
                  data-activates="mobile-demo"
                  class="button-collapse show-on-large"
                >
                  <i class="material-icons icon-white">menu</i>
                </a>
                <ul class="right hide-on-med-and-down">
                  <li>
                    <a href="https://github.com/oliviaoddo" target="_blank">
                      <i
                        class="fa fa-github fa-2x icon-white"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="linkedin.com/in/olivia-oddo" target="_blank">
                      <i
                        class="fa fa-linkedin-square fa-2x icon-white"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@oliviaoddo" target="_blank">
                      <i
                        class="fa fa-medium fa-2x icon-white"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="side-nav" id="mobile-demo">
              <li>
                <a class="intro" href="projects.html">
                  Projects
                </a>
              </li>
              <li>
                <a
                  class="intro"
                  href="https://codepen.io/collection/nbBqgY/"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  class="intro"
                  href="https://codepen.io/collection/nbBqgY/"
                  target="_blank"
                >
                  Experience
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
