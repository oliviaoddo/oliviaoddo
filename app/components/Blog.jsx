import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/blog';


class Blog extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBlogs();
  }
  render() {
    console.log("STATE",this.props)
    return (
      <div className="grey lighten-4">
    <div className="section-pad">

      <div className="container">
       <div className="row">
        <div className="col l6 offset-l3">
          <div className="card">
            <div className="card-image">
              {this.props.blogs.references ?
              <img src={"https://cdn-images-1.medium.com/fit/c/500/200/" + this.props.blogs.references.Post['8803337f54dc'].virtuals.previewImage.imageId}/>
              : null}
            </div>
            <div className="card-content">
            <span className="card-title">{this.props.blogs.references ? this.props.blogs.references.Post['8803337f54dc'].title : null}</span>
              <p className="intro">{this.props.blogs.references ? this.props.blogs.references.Post['8803337f54dc'].content.subtitle : null}</p>
              {this.props.blogs.references ? <p><a target="_blank" href={"https://medium.com/@oliviaoddo/"+ this.props.blogs.references.Post['8803337f54dc'].uniqueSlug}>Read more...</a></p> : null}
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

const mapStateToProps = (state) => {
    return {
      blogs: state.blog.blogs}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBlogs: () => dispatch(fetchBlogs())
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
