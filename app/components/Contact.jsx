import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNav, postMessage } from '../redux/personal';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
  componentDidMount() {
    this.props.setColor('dark');
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.contact({name: this.state.name, email: this.state.email, subject: this.state.subject, message: this.state.message}, this.successMessage, this.errorMessage)
  }

  successMessage = () => {
    Materialize.toast('Email sent to Olivia Oddo!', 3000, 'rounded success')
    this.setState({name: '', email: '', subject: '', message: ''})
  }

  errorMessage = () => {
    Materialize.toast('Email failed to send to Olivia Oddo, send directly to olivia.oddo@gmail.com!', 5500, 'rounded error')
    this.setState({name: '', email: '', subject: '', message: ''})
  }


  render() {
    return (
      <div className="grey lighten-4">
        <div className="section-pad">
          <div className="container">

            <div className='row'>
            <div className="col l6 offset-l3">
            <h2 className='heading'>Contact</h2>
            <p className='intro'>
              If you are interested in hiring me for a freelance position, would
              like to set up a chat, or are interested in me for a software
              engineering position at your company, please contact me below!
            </p>
            <a className="github intro" href="mailto:olivia.oddo@gmail.com?Subject=Contact%20Olivia" target="_top">olivia.oddo@gmail.com</a>
              <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={this.state.name}
                      required
                      onChange={event =>
                        this.setState({ name: event.target.value })}
                    />
                    <label htmlFor="name">
                      Name *
                    </label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={this.state.email}
                      onChange={event =>
                        this.setState({ email: event.target.value })}
                    />
                    <label htmlFor="email">
                      Email *
                    </label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={this.state.subject}
                      onChange={event =>
                        this.setState({ subject: event.target.value })}
                    />
                    <label htmlFor="subject">
                      Subject
                    </label>
                  </div>
                  <div className="input-field col s12">
                    <textarea
                      id="message"
                      className="materialize-textarea"
                      value={this.state.message}
                      name="description"
                      required
                      onChange={event =>
                        this.setState({ message: event.target.value })}
                    />
                    <label htmlFor="message">
                      Message *
                    </label>
                  </div>
                  <div className="input-field col s12">
                    <button
                      type="submit"
                      className="btn waves-effect waves-light addButton"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
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
  setColor: color => dispatch(setNav(color)),
  contact: (message, success, error) => dispatch(postMessage(message, success, error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
