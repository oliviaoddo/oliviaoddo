import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNav } from '../redux/personal';

class Projects extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setColor('dark');
  }
  render() {
    return (
      <div className="grey lighten-4">
        <div className="section-pad">
          <div className="container">
          <h2 className='intro'>Projects</h2>
            <div className="row">
              <div className="col m4">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/colors.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Hair Connect<i className="material-icons right">
                        more_vert
                      </i>
                    </span>
                    <em>January 2017 - May 2017</em>
                    <p>
                      <a href="#">View Project | </a>
                      <a href="https://github.com/oliviaoddo" target="_blank">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Hair Connect<i className="material-icons right">close</i>
                    </span>
                    <em>Solo Fullstack Developer</em>
                    <p>
                      The purpose of this project was to develop a better
                      understanding of fullstack web development. The motivation
                      behind my project idea was to provide a way for users and
                      salons or stylists to connect.
                    </p>
                    <p>
                      Hair Connect was developed using Django, Python, MySQL,
                      Bootstrap, HTML, CSS, and AWS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col m4">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/HUMM.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Humm<i className="material-icons right">more_vert</i>
                    </span>
                    <em>August 2017</em>
                    <p>
                      <a href="#">View Project | </a>
                      <a href="https://github.com/oliviaoddo" target="_blank">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Humm<i className="material-icons right">close</i>
                    </span>
                    <em>Fullstack Developer</em>
                    <p>
                      Humm is an IOS application that allows users to share
                      playlists accross music streaming services. For example,
                      someone can share their Apple Music playlist with a friend
                      through our app, and the playlist will be downloaded onto
                      the friend's Spotify account.
                    </p>
                    <p>
                      I was responsible for integrating Swift classes into our
                      react native app in order manipulate an Apple Music user's
                      account. I also designed and created the front end views
                      of our application.
                    </p>
                    <p>
                      Humm was created using React Native, Firebase,
                      MusicKit/Swift, and Spotify IOS SDK.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col m4">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/colors.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Web Axs<i className="material-icons right">more_vert</i>
                    </span>
                    <em>August 2017</em>
                    <p>
                      <a href="#">View Project | </a>
                      <a href="#">Watch my Talk | </a>
                      <a href="https://github.com/oliviaoddo" target="_blank">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Web Axs<i className="material-icons right">close</i>
                    </span>
                    <em>Solo Frontend Developer</em>
                    <p>
                      Web Accessibility is a very important part of web
                      development that is often times forgotten about. The
                      purpose of this project is to provide people with a simple
                      tips that will help them make their website's more
                      accessible.
                    </p>
                    <p>
                      Web Axs was developed with React, Materialize, HTML, CSS,
                      and Heroku.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col m4">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/seek.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Seek<i className="material-icons right">more_vert</i>
                    </span>
                    <em>August 2017</em>
                    <p>
                      <a href="#">View Project | </a>
                      <a href="https://github.com/oliviaoddo" target="_blank">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Seek<i className="material-icons right">close</i>
                    </span>
                    <em>Fullstack Developer</em>
                    <p>
                      The purpose of this project was to develop a better
                      understanding of fullstack web development. The motivation
                      behind my project idea was to provide a way for users and
                      salons or stylists to connect.
                    </p>
                    <p>
                      Seek was developed using React Native, Firebase, and the
                      Foursquare API.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col m4">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/HUMM.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Grace Shopper<i className="material-icons right">
                        more_vert
                      </i>
                    </span>
                    <em>August 2017</em>
                    <p>
                      <a href="#">View Project | </a>
                      <a href="https://github.com/oliviaoddo" target="_blank">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Grace Shopper<i className="material-icons right">close</i>
                    </span>
                    <em>Fullstack Developer</em>
                    <p>
                      Grace Shopper is an ecommerce website that allows users to
                      filter products by category, and add items to the cart.
                    </p>
                    <p>
                      I took the lead on designing the database, as well as
                      implementing the models in Sequelize. I created API
                      endpoints using Express, and developed front end
                      components with React.js.
                    </p>
                    <p>
                      Grace Shopper was created using Node.js, Express,
                      React.js, Redux, Sequelize, PostgreSQL, Materialize, HTML,
                      CSS, and Heroku.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col m4">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/colors.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      NYC Data<i className="material-icons right">more_vert</i>
                    </span>
                    <em>July 2017</em>
                    <p>
                      <a href="#">View Project | </a>
                      <a href="https://github.com/oliviaoddo" target="_blank">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      NYC Data<i className="material-icons right">close</i>
                    </span>
                    <em>Solo Fullstack Developer</em>
                    <p>
                      Web Accessibility is a very important part of web
                      development that is often times forgotten about. The
                      purpose of this project is to provide people with a simple
                      tips that will help them make their website's more
                      accessible.
                    </p>
                    <p>
                      NYC Data was developed with Node.js, Express, MySQL,
                      Sequelize, and the Google Maps API.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col m4">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/seek.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      BeKind<i className="material-icons right">more_vert</i>
                    </span>
                    <em>December 2016</em>
                    <p>
                      <a href="https://github.com/oliviaoddo" target="_blank">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      BeKind<i className="material-icons right">close</i>
                    </span>
                    <em>Solo Frontend Developer</em>
                    <p>
                      The purpose of this project was to develop a better
                      understanding of fullstack web development. The motivation
                      behind my project idea was to provide a way for users and
                      salons or stylists to connect.
                    </p>
                    <p>
                      Be Kind was developed using Angular, Javascript, HTML, and CSS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col m4">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/HUMM.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Amplified Voices<i className="material-icons right">
                        more_vert
                      </i>
                    </span>
                    <em>September 2016 - December 2016</em>
                    <p>
                      <a href="https://github.com/oliviaoddo" target="_blank">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Amplified Voices<i className="material-icons right">close</i>
                    </span>
                    <em>Frontend Developer</em>
                    <p>
                      Grace Shopper is an ecommerce website that allows users to
                      filter products by category, and add items to the cart.
                    </p>
                    <p>
                      I took the lead on designing the database, as well as
                      implementing the models in Sequelize. I created API
                      endpoints using Express, and developed front end
                      components with React.js.
                    </p>
                    <p>
                      Grace Shopper was created using Node.js, Express,
                      React.js, Redux, Sequelize, PostgreSQL, Materialize, HTML,
                      CSS, and Heroku.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col m4">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/colors.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Resturant Web App<i className="material-icons right">more_vert</i>
                    </span>
                    <em>September 2016 - December 2016</em>
                    <p>
                      <a href="https://github.com/oliviaoddo" target="_blank">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Resturant Web App<i className="material-icons right">close</i>
                    </span>
                    <em>Fullstack Developer</em>
                    <p>
                      Web Accessibility is a very important part of web
                      development that is often times forgotten about. The
                      purpose of this project is to provide people with a simple
                      tips that will help them make their website's more
                      accessible.
                    </p>
                    <p>
                      NYC Data was developed with Node.js, Express, MySQL,
                      Sequelize, and the Google Maps API.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
