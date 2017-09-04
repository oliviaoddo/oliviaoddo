import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNav } from '../redux/personal';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  getOffset = element => {
    var bounding = element.getBoundingClientRect();
    return {
      top: bounding.top + document.body.scrollTop,
      left: bounding.left + document.body.scrollLeft
    };
  };

  handleScroll = () => {
    var navbar = ReactDOM.findDOMNode(this.refs.navbar);
    var startElement = document.getElementById('startRef');
    if (startElement) {
      var offset = this.getOffset(startElement);
      var windowsScrollTop = window.pageYOffset;
      if (windowsScrollTop >= offset.top) {
        navbar.classList.add('nav-color');
      } else {
        navbar.classList.remove('nav-color');
      }
    }
  };

  componentDidMount() {
    if (this.props.color !== 'dark')
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUpdate(nextProps, nextState) {
    var navbar = ReactDOM.findDOMNode(this.refs.navbar);
    if (nextProps.color === 'dark') {
      navbar.classList.add('nav-color');
    } else {
      navbar.classList.remove('nav-color');
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav ref="navClass" className="transparent z-depth-0" ref="navbar">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12">
                <a
                  ref={ev => {
                    $(ev).sideNav();
                  }}
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
                    <a
                      href="https://linkedin.com/in/olivia-oddo"
                      target="_blank"
                    >
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
                <Link
                  onClick={ev => {
                    $(ev).sideNav('hide');
                  }}
                  to="/"
                >
                  About Olivia
                </Link>
              </li>
              <li>
                <Link
                  onClick={ev => {
                    $(ev).sideNav('hide');
                  }}
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={ev => {
                    $(ev).sideNav('hide');
                  }}
                  to="/contact"
                >
                  Contact Me
                </Link>
              </li>
              <li>
                <Link
                  onClick={ev => {
                    $(ev).sideNav('hide');
                  }}
                  to="/education"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  onClick={ev => {
                    $(ev).sideNav('hide');
                  }}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state.personal.color
  };
};

export default connect(mapStateToProps, null)(Navigation);
