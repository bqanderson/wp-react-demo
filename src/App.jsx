import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import PostList from './components/PostList'

const App = () => (
  <Router>
    <div>
      <Header />
      <section className='section container content'>
        <Route exact path='/' component={PostList} />
      </section>
    </div>
  </Router>
)

export default App
