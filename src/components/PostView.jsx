import React, { Component, Fragment } from 'react'
import axios from 'axios'

class PostView extends Component {
  constructor(props) {
    super(props)
    this.state = { post: {} }
  }

  componentDidMount() {
    const slug = this.props.match.params.slug
    axios
      .get(`https://techcrunch.com/wp-json/wp/v2/posts?slug=${slug}`)
      .then(post => {
        this.setState({ post: post.data[0] })
      })
  }

  createMarkup = html => {
    return { __html: html }
  }

  render() {
    let build
    if (this.state.post.title) {
      build = (
        <Fragment>
          <h1
            dangerouslySetInnerHTML={this.createMarkup(
              this.state.post.title.rendered
            )}
          />
          <div
            dangerouslySetInnerHTML={this.createMarkup(
              this.state.post.content.rendered
            )}
          />
        </Fragment>
      )
    } else {
      build = <div />
    }
    return build
  }
}

export default PostView
