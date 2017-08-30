import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNav } from '../redux/blog';

class Navigation extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav className= {this.props.color ? "transparent z-depth-0 nav-color" : "transparent z-depth-0"}>
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12">
                <a ref={(ev)=>{$(ev).sideNav();}}
                  href="#"
                  data-activates="mobile-demo"
                  className="button-collapse show-on-large"
                >
                  <i className="material-icons icon-white">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <a href="https://github.com/oliviaoddo" target="_blank">
                      <i
                        className="fa fa-github fa-2x icon-white"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/olivia-oddo" target="_blank">
                      <i
                        className="fa fa-linkedin-square fa-2x icon-white"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@oliviaoddo" target="_blank">
                      <i
                        className="fa fa-medium fa-2x icon-white"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="side-nav" id="mobile-demo">
             <li>
                <Link  onClick={(ev)=>{$(ev).sideNav('hide');}} to="/">
                  About Olivia
                </Link>
              </li>
              <li>
                <Link  onClick={(ev)=>{$(ev).sideNav('hide');}} to="/projects">

                  Projects
                </Link>
              </li>
              <li>
                <Link
                   onClick={(ev)=>{$(ev).sideNav('hide');}}
                  to="/blog"

                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  onClick={(ev)=>{$(ev).sideNav('hide');}}
                  to="/experience"

                >
                  Experience
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      color: state.blog.color}
}

export default connect(mapStateToProps, null)(Navigation)
