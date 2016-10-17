const React = require('react')
const ReactDOM = require('react-dom') //render engine
const Landing = require('./Landing')
const Covers = require('./Covers')
const Contact = require('./Contact')
const Bio = require('./Bio')
const Gallery = require ('./Gallery')
const Layout = require('./Layout')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/bio' component={Bio} />
      <Route path='/covers' component={Covers} />
      <Route path='/contact' component={Contact} />
      <Route path='/gallery' component={Gallery} />
    </Route>
  </Router>
 )

ReactDOM.render(<App />, document.getElementById('app'))


//const avoid collisions with global variables
//router maps url paths to specifics comp
//hash history makes router stateful
