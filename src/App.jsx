import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header'

const App = () => (
  <Router>
    <div>
      <Header />
      <section className='section container content'>
        <h1>Website build using Wordpress API and React.js</h1>
      </section>
    </div>
  </Router>
)

export default App
