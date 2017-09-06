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
            <h2 className="heading">Projects</h2>
            <div className="row">
              <div className="col l4 m6 s12">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/hairconnect.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Hair Connect<i className="material-icons right">
                        more_vert
                      </i>
                    </span>
                    <em>January 2017 - May 2017</em>
                    <p>
                      <a
                        className="project-link"
                        href="http://hairconnect.me/"
                        target="_blank"
                      >
                        View Project |{' '}
                      </a>
                      <a
                        href="https://github.com/oliviaoddo/hair-connect"
                        target="_blank"
                      >
                        <i
                          className="fa fa-github fa-lg github"
                          aria-hidden="true"
                        />
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
                      {' '}I designed the front end with bootstrap and Django’s
                      templating language. The database was developed with
                      MySQL, and I used a stored procedure to implement
                      searching by zip code. In addition, I used Django’s ORM to
                      query the database and dynamically display information to
                      the user.
                    </p>
                    <p>
                      Hair Connect was developed using Django, Python, MySQL,
                      Bootstrap, HTML, CSS, and AWS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col l4 m6 s12">
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
                      <a
                        href="https://www.youtube.com/watch?v=J0Ua_ZlNbcs"
                        target="_blank"
                        className="project-link"
                      >
                        View Project |{' '}
                      </a>
                      <a
                        href="https://github.com/HumApp/humclient"
                        target="_blank"
                      >
                        <i
                          className="fa fa-github fa-lg github"
                          aria-hidden="true"
                        />
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
                      playlists across music streaming services. For example,
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
              <div className="col l4 m6 s12">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <a
                      className="waves-effect waves-light modal-trigger"
                      href="#modal1"
                    >
                      <img src="images/webpreview.png" />
                    </a>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Web Axs<i className="material-icons right">more_vert</i>
                    </span>
                    <em>August 2017</em>
                    <p>
                      <a
                        className="project-link"
                        href="http://web-axs.herokuapp.com/"
                        target="_blank"
                      >
                        View Project |{' '}
                      </a>
                      <a
                        href="https://github.com/oliviaoddo/accessibility"
                        target="_blank"
                      >
                        <i
                          className="fa fa-github fa-lg github"
                          aria-hidden="true"
                        />
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
                      purpose of this project is to provide people with simple
                      tips that will help them make their website's more
                      accessible.
                    </p>
                    <p>
                      Web Axs was developed with React.js, Node.js, Express, Materialize, HTML, CSS,
                      and Heroku.
                    </p>
                  </div>
                </div>
              </div>
              </div>
              <div className='row'>
              <div className="col l4 m6 s12">
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
                      <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=b-23WjoX2ys"
                        className="project-link"
                      >
                        View Project |{' '}
                      </a>
                      <a
                        href="https://github.com/jalerner/nativeTrial"
                        target="_blank"
                      >
                        <i
                          className="fa fa-github fa-lg github"
                          aria-hidden="true"
                        />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Seek<i className="material-icons right">close</i>
                    </span>
                    <em>Fullstack Developer</em>
                    <p>
                      Leveraged React Native, Firebase, and geoLocation to
                      provide customized and timely activity recommendations.
                      For an instant activity, Seek populates activities that
                      are currently open within half a mile that a user is
                      expected to enjoy given prior interactions. The user then
                      may swipe no and see additional activities, or swipe yes
                      to navigate to directions. Users may also plan out a few
                      events or entire day. Again, Seek will auto-populate
                      recommended activities given category criteria (such as
                      eat, entertainment, bars, etc.) and users may keep
                      recommended activities or solicit another category
                      activity with one click. Lastly, users can reference prior
                      plans and share with other Seek users!
                    </p>
                    <p>
                      Seek was developed using React Native, Firebase, and the
                      Foursquare API.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col l4 m6 s12">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/graceshopper.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Grace Shopper<i className="material-icons right">
                        more_vert
                      </i>
                    </span>
                    <em>August 2017</em>
                    <p>
                      <a
                        className="project-link"
                        href="https://seacandy.herokuapp.com/"
                        target="_blank"
                      >
                        View Project |{' '}
                      </a>
                      <a
                        href="https://github.com/oliviaoddo/grace-shopper"
                        target="_blank"
                      >
                        <i
                          className="fa fa-github fa-lg github"
                          aria-hidden="true"
                        />
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
              <div className="col l4 m6 s12">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/nycdata.png" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      NYC Data<i className="material-icons right">more_vert</i>
                    </span>
                    <em>July 2017</em>
                    <p>
                      <a
                        className="project-link"
                        href="https://github.com/oliviaoddo/nyc-map-data"
                        target="_blank"
                      >
                        <i
                          className="fa fa-github fa-lg github"
                          aria-hidden="true"
                        />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      NYC Data<i className="material-icons right">close</i>
                    </span>
                    <em>Solo Fullstack Developer</em>
                    <p>
                      The purpose of this project was to visualize various New
                      York City data sets. I explored noise complaints, graffiti
                      complaints, and food establishment complaints.
                    </p>
                    <p>
                      NYC Data was developed with Node.js, Express, MySQL,
                      Sequelize, and the Google Maps API.
                    </p>
                  </div>
                </div>
              </div>
              </div>
              <div className='row'>
              <div className="col l4 m6 s12">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <a
                      className="waves-effect waves-light modal-trigger"
                      href="#modal2"
                    >
                      <img src="images/bekiind.png" />
                    </a>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      BeKiind<i className="material-icons right">more_vert</i>
                    </span>
                    <em>December 2016</em>
                    <p>
                      <a
                        href="https://github.com/oliviaoddo/BeKiind"
                        target="_blank"
                      >
                        <i
                          className="fa fa-github fa-lg github"
                          aria-hidden="true"
                        />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      BeKiind<i className="material-icons right">close</i>
                    </span>
                    <em>Solo Frontend Developer</em>
                    <p>
                      Promotes a more positive community and helps to better
                      oneself. A user is assigned a task to go out and
                      accomplish. They upload a photo and share their
                      experience. Users can like other posts, however likes and
                      posts are all anonymous.
                    </p>
                    <p>
                      BeKiind was developed using Angular, Javascript, HTML, and
                      CSS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col l4 m6 s12">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      className="activator"
                      src="images/amplifiedvoices.png"
                    />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Amplified Voices<i className="material-icons right">
                        more_vert
                      </i>
                    </span>
                    <em>September 2016 - December 2016</em>
                    <p>
                      <a
                        href="https://github.com/TheDirtySix/TheDirtySix"
                        target="_blank"
                      >
                        <i
                          className="fa fa-github fa-lg github"
                          aria-hidden="true"
                        />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Amplified Voices<i className="material-icons right">
                        close
                      </i>
                    </span>
                    <em>Frontend Developer</em>
                    <p>
                      Competed in OpenAir's web accessibility contest where
                      teams developed accessible web sites for non profit
                      organizations.
                    </p>
                    <p>
                      I styled several html pages by using their color palette
                      in an accessible way.
                    </p>
                    <p>
                      Amplified voices was developed with Wordpress, HTML, and
                      CSS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col l4 m6 s12">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <a
                      className="waves-effect waves-light modal-trigger"
                      href="#modal3"
                    >
                      <img src="images/webapp.png" />
                    </a>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Resturant Web App<i className="material-icons right">
                        more_vert
                      </i>
                    </span>
                    <em>September 2016 - December 2016</em>
                    <p>
                      <a
                        href="https://github.com/oliviaoddo/RestaurantWebApp"
                        target="_blank"
                      >
                        <i
                          className="fa fa-github fa-lg github"
                          aria-hidden="true"
                        />
                      </a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Resturant Web App<i className="material-icons right">
                        close
                      </i>
                    </span>
                    <em>Fullstack Developer</em>
                    <p>
                      An online restaurant ordering system, that allows a user
                      to filter menu items by nutritional facts, add items to
                      the cart, and checkout.
                    </p>
                    <p>
                      I was the lead Javascript developer, created the cart with
                      local storage, and added the product filter feature.
                    </p>
                    <p>Developed with PHP, Javascript, HTML, CSS.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div
          id="modal1"
          ref={modal => {
            $(modal).modal();
          }}
          className="modal"
        >
          <div className="modal-content">
            <div className="video-container">
              <iframe
                width="853"
                height="480"
                src="//www.youtube.com/embed/KhEv8QpBEXk?rel=0"
                frameBorder="1"
                allowFullScreen
              />
            </div>
          </div>
          <div className="modal-footer">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=KhEv8QpBEXk"
              className="modal-action modal-close waves-effect waves-green btn-flat"
            >
              View on Youtube
            </a>
            <a
              href="http://web-axs.herokuapp.com/"
              target="_blank"
              className="modal-action modal-close btn waves-effect waves-green view"
            >
              View Site
            </a>
          </div>
        </div>
        <div
          id="modal2"
          ref={modal => {
            $(modal).modal();
          }}
          className="modal"
        >
          <div className="modal-content">
            <div className="video-container">
              <iframe
                width="853"
                height="480"
                src="//www.youtube.com/embed/p6cPYuZMKWs?rel=0"
                frameBorder="1"
                allowFullScreen
              />
            </div>
          </div>
          <div className="modal-footer">
            <a href="https://github.com/oliviaoddo/BeKiind" target="_blank">
              <i className="fa fa-github fa-lg github" aria-hidden="true" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=p6cPYuZMKWs"
              className="modal-action modal-close waves-effect waves-green btn-flat"
            >
              View on Youtube
            </a>
          </div>
        </div>
        <div
          id="modal3"
          ref={modal => {
            $(modal).modal();
          }}
          className="modal"
        >
          <div className="modal-content">
            <div className="video-container">
              <iframe
                width="853"
                height="480"
                src="//www.youtube.com/embed/VL-AgPZcFSI?rel=0"
                frameBorder="1"
                allowFullScreen
              />
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="https://github.com/oliviaoddo/RestaurantWebApp"
              target="_blank"
            >
              <i className="fa fa-github fa-lg github" aria-hidden="true" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=VL-AgPZcFSI&t=1s"
              className="modal-action modal-close waves-effect waves-green btn-flat"
            >
              View on Youtube
            </a>
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
