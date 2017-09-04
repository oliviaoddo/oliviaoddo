import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNav } from '../redux/personal';

class Education extends Component {
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
          <h2 className='intro'>Education</h2>
            <div className="row">
              <div className="col m6">
                <img src="images/fullstack.jpg" />
              </div>
              <div className="col m6">
                <h2 className="intro"> Fullstack Academy of Code</h2>
                <em className="intro">June 2017 - August 2017</em>
                <p>
                  Fullstack Academy of Code is an elite software engineering
                  immersive program located in New York City. During my time
                  here, I developed a deep understanding of Javascript. I spent
                  over 600 hours learning Node.js, Express, React, Sequelize,
                  PostgreSQL, and many more technologies. During the first six
                  weeks, I worked closely with others on workshops where we pair
                  programmed. The last six weeks focused on teamwork, where
                  students worked on larger projects together. I learned how to
                  use git with a team, practice agile development, and listen to
                  and collaborate with others.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col m6">
                <img src="images/csulb.jpg" />
              </div>
              <div className="col m6">
                <h2 className="intro">California State University, Long Beach</h2>
                <em className="intro">August 2013 - December 2017</em>
                <h6 className="intro">GPA: 3.7</h6>
                <p>
                  I will recieve a Bachelor of the Arts in Film and Electronic
                  Arts this fall. I completed a minor in computer science, and a
                  second minor in web technologies and applications.
                </p>
                <p>President's List: Fall 2013, Fall 2014, Fall 2015, Fall 2016</p>
                <p>Dean's List: Spring 2014, Spring 2015, Spring 2016</p>
                <p>Course Work</p>
                <ul>
                  <li>
                    Database Fundamentals
                    <li>Focused on database design and MySQL</li>
                  </li>
                  <li>Intro to Software Engineering
                  <li>{`\tLearned agile development etc.`}</li>
                  </li>
                  <li>Object Oriented Programming and Data Structures
                  <li>Learned agile development etc.</li>
                  </li>
                   <li> C++ for Java Programmers
                  <li>Learned agile development etc.</li>
                  </li>
                  <li> Dynamic Web Sites
                  <li>Learned agile development etc.</li>
                  </li>
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Education);
