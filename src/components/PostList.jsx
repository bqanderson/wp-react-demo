import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = { posts: [] }
  }

  componentDidMount() {
    axios.get('https://techcrunch.com/wp-json/wp/v2/posts').then(posts => {
      this.setState({ posts: posts.data })
    })
  }

  createMarkup = html => {
    return { __html: html }
  }

  render() {
    const { posts } = this.state
    return (
      <Fragment>
        {posts.map(post => (
          <Link to={`/${post.slug}`} key={post.id}>
            <div className='card' key={post.id}>
              <div className='card-content'>
                <h3
                  dangerouslySetInnerHTML={this.createMarkup(
                    post.title.rendered
                  )}
                />
                <div
                  dangerouslySetInnerHTML={this.createMarkup(
                    post.excerpt.rendered
                  )}
                />
              </div>
            </div>
          </Link>
        ))}
      </Fragment>
    )
  }
}

export default PostList
