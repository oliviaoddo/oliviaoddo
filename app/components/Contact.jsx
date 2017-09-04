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
    this.props.contact({name: this.state.name, email: this.state.email, subject: this.state.subject, message: this.state.subject}, this.successMessage)
  }

  successMessage = () => {
    this.setState({name: '', email: '', subject: '', message: ''})
  }

  render() {
    return (
      <div className="grey lighten-4">
        <div className="section-pad">
          <div className="container">
            <h2 className="intro">Contact</h2>
            <p>
              If you are interested in hiring me for a freelance position, would
              like to set up a chate, or are interested in me for a software
              engineering position at your company, please contact me below!
            </p>
            <div className="col m12 s12">
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
                    <label htmlFor="prod_name">
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
                    <label htmlFor="price">
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
                    <label htmlFor="prod_name">
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
                    <label htmlFor="description">
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
  contact: (message, success) => dispatch(postMessage(message, success)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
