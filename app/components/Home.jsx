import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { fetchBlogs, setNav } from '../redux/blog';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setColor('');
  }

  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <div className="row center" />
              <br />
              <br />
            </div>
          </div>
          <div
            ref={img => {
              $(img).parallax();
            }}
            className="parallax"
          >
            <img
              className="img1"
              src="images/background3.jpg"
              alt="Olivia Oddo in San Francisco"
            />
          </div>
        </div>

        <div className="grey lighten-4" id='startRef'>
          <div className="section">
            <div className="container">
              <div className="row bio">
                <div className="col s12 m6">
                  <div className="icon-block">
                    <img
                      className="oliviaProfile"
                      src="images/oliviaoddo-small.jpg"
                      alt="Olivia Oddo in San Francisco"
                    />
                  </div>
                </div>

                <div className="col s12 m6">
                  <div>
                    <h4 className="center intro">Olivia Oddo</h4>
                    <h6 className="center intro">
                      Fullstack Software Engineer
                    </h6>
                    <p className="intro">
                      I majored in Film and Electronic arts at CSULB and
                      completed two minors, one in Computer Science and the
                      other in Web Technologies and Applications. In 2014, I
                      opened an ecommerce sea glass jewelry business. I
                      developed the ecommerce website, designed the jewelry, and
                      marketed it. This is when I discovered the practical
                      application of computer science. I attended Fullstack
                      Academy in NYC to further my education, and I am currently
                      seeking development opportunities in San Francisco, CA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <div className="row center" />
              <br />
              <br />
            </div>
          </div>
          <div
            ref={img => {
              $(img).parallax();
            }}
            className="parallax"
          >
            <img
              className="img1"
              src="images/background1.jpg"
              alt="Olivia Oddo in San Francisco"
            />
          </div>
        </div>

        <div className="grey lighten-4">
          <div className="section">
            <div className="container">
              <h3 className="center intro">Technical Skills</h3>
              <div className="row bio">
                <div className="col s12 m3">
                  <div className="icon-block">
                    <ul>
                      <li>
                        <img src="images/firebase120.png" />
                      </li>
                      <li>
                        <img src="images/react120.png" />
                      </li>
                      <li>
                        <img src="images/sequelize120.png" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="icon-block">
                    <ul>
                      <li>
                        <img src="images/node120.png" />
                      </li>
                      <li>
                        <img src="images/postgresql120.png" />
                      </li>
                      <li>
                        <img src="images/django120.png" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="icon-block">
                    <ul>
                      <li>
                        <img src="images/html120.png" />
                      </li>
                      <li>
                        <img src="images/git120.png" />
                      </li>
                      <li>
                        <img src="images/css120.png" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="icon-block">
                    <ul>
                      <li>
                        <img src="images/redux120.png" />
                      </li>
                      <li>
                        <img src="images/mysql120.png" />
                      </li>
                      <li>
                        <img src="images/javascript120.png" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center" />
            </div>
          </div>
          <div
            ref={img => {
              $(img).parallax();
            }}
            className="parallax"
          >
            <img
              src="images/background4.jpg"
              alt="Unsplashed background img 2"
            />
          </div>
        </div>

        <div className="grey lighten-4">
          <div className="section">
            <div className="container">
              <div className="row">
                <h3 className="center intro">Projects</h3>
                <div className="col s12 m6">
                  <div className="icon-block">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/colors.png" />
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                          Card Title<i className="material-icons right">
                            more_vert
                          </i>
                        </span>
                        <p>
                          <a href="#">This is a link</a>
                        </p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                          Card Title<i className="material-icons right">
                            close
                          </i>
                        </span>
                        <p>
                          Here is some more information about this product that
                          is only revealed once clicked on.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col s12 m6">
                  <div className="icon-block">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/web-axs.png" />
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                          Card Title<i className="material-icons right">
                            more_vert
                          </i>
                        </span>
                        <p>
                          <a href="#">This is a link</a>
                        </p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                          Card Title<i className="material-icons right">
                            close
                          </i>
                        </span>
                        <p>
                          Here is some more information about this product that
                          is only revealed once clicked on.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6">
                  <div className="icon-block">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/web-axs.png" />
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                          Card Title<i className="material-icons right">
                            more_vert
                          </i>
                        </span>
                        <p>
                          <a href="#">This is a link</a>
                        </p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                          Card Title<i className="material-icons right">
                            close
                          </i>
                        </span>
                        <p>
                          Here is some more information about this product that
                          is only revealed once clicked on.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="icon-block">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/web-axs.png" />
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                          Card Title<i className="material-icons right">
                            more_vert
                          </i>
                        </span>
                        <p>
                          <a href="#">This is a link</a>
                        </p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                          Card Title<i className="material-icons right">
                            close
                          </i>
                        </span>
                        <p>
                          Here is some more information about this product that
                          is only revealed once clicked on.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center" />
            </div>
          </div>
          <div
            ref={img => {
              $(img).parallax();
            }}
            className="parallax"
          >
            <img
              src="images/background2.jpg"
              alt="Unsplashed background img 3"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state.blog.color
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setColor: color => dispatch(setNav(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
