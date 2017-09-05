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
                          <div className="row">
                            <div className="col s3 no-pad">
                              <img
                                className="avatar"
                                src={
                                  'https://cdn-images-1.medium.com/fit/c/50/50/' +
                                  data.User.ae4f1362796f.imageId
                                }
                              />
                            </div>
                            <div className="col s3 no-pad">
                              <a className="github intro" href="https://medium.com/@oliviaoddo" target="_blank">
                                <span>
                                  {data.User.ae4f1362796f.name}
                                </span>
                              </a>
                              <br />
                              <span className='intro'>
                                {Math.ceil(
                                  data.Post['8803337f54dc'].virtuals.readingTime
                                )}{' '}
                                min read &#8226;{' '}
                              </span>
                              <span className='intro'>
                                {' '}{prettyDate(
                                  new Date(data.Post['8803337f54dc'].createdAt)
                                )}
                              </span>
                            </div>
                          </div>
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
                        <span className="card-title intro">
                          {data.Post['8803337f54dc'].title}
                        </span>

                        <span className="intro">
                          {data.Post['8803337f54dc'].content.subtitle}
                        </span>
                        <br />
                        <em>
                          <a
                            className="github"
                            target="_blank"
                            href={
                              'https://medium.com/@oliviaoddo/' +
                              data.Post['8803337f54dc'].uniqueSlug
                            }
                          >
                            Read more...
                          </a>
                        </em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            : <div className="container">
                <div className="row">
                  <div className="col l6 offset-l3">
                    {' '}<div className="progress deep-orange lighten-3">
                      <div className="indeterminate   deep-orange lighten-1" />
                    </div>
                  </div>
                </div>
              </div>}
        </div>
      </div>
    );
  }
}

function prettyDate(date) {
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return (
    months[date.getUTCMonth()] +
    ' ' +
    date.getUTCDate() +
    ', ' +
    date.getUTCFullYear()
  );
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
