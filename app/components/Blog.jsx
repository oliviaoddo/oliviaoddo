import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBlogs, setNav } from '../redux/personal';

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBlogs();
    this.props.setColor('dark');
  }
  render() {
    const data = this.props.blogs.references;
    return (
      <div className="grey lighten-4">
        <div className="section-pad">
          {data
            ? <div className="container">
                <div className="row">
                  <div className="col l6 offset-l3">
                    <div className="card">
                      <div className="card-content">
                        <div>
                          <img
                            className="avatar"
                            src={
                              'https://cdn-images-1.medium.com/fit/c/50/50/' +
                              data.User.ae4f1362796f.imageId
                            }
                          />
                        </div>
                      </div>
                      <div className="card-image">
                        <img
                          src={
                            'https://cdn-images-1.medium.com/fit/c/500/200/' +
                            data.Post['8803337f54dc'].virtuals.previewImage
                              .imageId
                          }
                        />
                      </div>
                      <div className="card-content">
                        <span className="card-title">
                          {data.Post['8803337f54dc'].title}
                        </span>
                        <p className="intro">
                          {data.Post['8803337f54dc'].content.subtitle}
                        </p>
                        <p>
                          <a
                            target="_blank"
                            href={
                              'https://medium.com/@oliviaoddo/' +
                              data.Post['8803337f54dc'].uniqueSlug
                            }
                          >
                            Read more...
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.personal.blogs,
    color: state.personal.color
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBlogs: () => dispatch(fetchBlogs()),
  setColor: color => dispatch(setNav(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
