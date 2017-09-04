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
          <h2 className='heading'>Education</h2>
            <div className="row">
              <div className="col m6 s12 l6">
                <img src="images/fullstack.jpg" />
              </div>
              <div className="col m6 s12 l6">
                <h2 className="intro"> Fullstack Academy of Code</h2>
                <em className="intro">June 2017 - August 2017</em>
                <p className="intro">
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
              <div className="col m6 s12 l6">
                <img src="images/csulb.jpg" />
              </div>
              <div className="col m6 s12 l6">
                <h2 className="intro">California State University, Long Beach</h2>
                <em className="intro">August 2013 - December 2017</em>
                <h6 className="intro">3.78 GPA</h6>
                <p className="intro">
                  I will receive a Bachelor of the Arts in Film and Electronic
                  Arts this fall. I completed a minor in computer science, and a
                  second minor in web technologies and applications.
                </p>
                <p className="intro">President's List: Fall 2013, Fall 2014, Fall 2015, Fall 2016<br />
                Dean's List: Spring 2014, Spring 2015, Spring 2016</p>
                <p  className='course-title'>Course Work</p>
                <ul>
                  <li className='course'>
                    Database Fundamentals</li>
                    <li className='indent intro'>Fundamental topics on database management. Topics include entity-relationship models, database design, data definition language, the relational model, data manipulation language, database application programming and normalization. </li>

                  <li className='course'>Intro to Software Engineering</li>
                  <li className='indent intro'>Principles of software engineering, UML, modeling large software systems, requirements elicitation, object oriented analysis and design using UML, introduction to design patterns, implementation of large systems, software testing, project management, the software lifecycle. Semester long programming project.</li>

                  <li className='course'>Object Oriented Programming and Data Structures</li>
                  <li className='indent intro'>Disciplined methods of design, coding and testing using the Java programming language. Data abstraction, object-oriented design. Introduction to data structures (linked lists, stacks, queues and trees.) Recursion. Sorting and searching. .</li>

                   <li className='course'> C++ for Java Programmers</li>
                  <li className='indent intro'>Structured and Object Oriented Programming in C++.  Common features and differences between Java and C++.  Pointers, references, and memory management, stream I/O, classes, operator overloading, exception handling, STL. </li>

                  <li className='course'>Dynamic Web Sites</li>
                  <li className='indent intro'>Dynamic Web design using modern tools. Creation of domains, using hosting services and content management systems. Website portability, usability and accessibility.
                  </li>
                  <li className='course'>Introduction to Programming and Problem Solving</li>
                  <li className='indent intro'>Introduction to basic concepts of computer science and fundamental techniques for solving problems using the Python programming language. Variables, data types, conditional statements, loops and arrays. Programming style. Applications to numerical and non-numerical problems. </li>

                  <li className='course'>Intermediate Web Design</li>
                  <li className='indent intro'>Intermediate HTML and CSS using Dreamweaver, following the W3C guidelines for coding. Web sites designed with usability and accessibility principles implemented.</li>

                  <li className='course'>Beginning Web Design</li>
                  <li className='indent intro'>Introduction to HTML and CSS using modern tools, following the W3C guidelines for coding. Web sites designed with usability and accessibility principles implemented. Overview of graphics, video, sound, JavaScript and Dreamweaver.</li>


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
