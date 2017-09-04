import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs, setNav } from '../redux/personal';

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

        <div className="grey lighten-4" id="startRef">
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
                    <h6 className="center">
                      Seeking development opportunies in SF, CA
                    </h6>
                    <p className="intro">
                      I have been studying film and electronic arts at
                      California State University Long Beach for the past four
                      years. I completed one minor in computer science and a
                      second minor in web technologies and applications. I
                      really enjoyed my first few computer science classes,
                      however I did not undertand how they could be applied to
                      the real world.
                    </p>
                    <p className="intro">
                      During my second year of college, I opened an ecommerce
                      business selling sea glass jewelery. I designed the
                      jewelery, photographed it, marketed it on social media,
                      and developed the ecommerce website. This is when I
                      discovered the practical application of computer science.
                      I became obsessed with coding and spent 200 hours on Team
                      Treehouse within the span of two months.
                    </p>
                    <p className="intro">
                      Towards the end of my college career, I knew I wanted to
                      be a software engineer. I was torn between teaching myself
                      and risking my savings to attend Fullstack Academy in NYC.
                      I decided that I needed to accelerate my learning in a
                      professional setting where I would collarborate with peers
                      on projects. I spent over 600 hours this past summer
                      solifidying my skills, and I am so happy with my decision.
                      I am currently looking to start my software engineering
                      career at a startup in San Francisco, CA where I can work
                      closely with the product.
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
               <Link to='/projects'><p className="center"><em>View all projects...</em></p></Link>
                <div className="col s12 m12">
                  <div className="video-container">
                    <iframe
                      width="853"
                      height="480"
                      src="//www.youtube.com/embed/J0Ua_ZlNbcs?rel=0"
                      frameBorder="1"
                      allowFullScreen
                    />
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
    color: state.personal.color
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setColor: color => dispatch(setNav(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
