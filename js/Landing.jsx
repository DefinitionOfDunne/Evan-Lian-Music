const React = require('react')
const Navbar = require('./Navbar')
const Header = require('./Header')

const Landing = () => (
  <div>
    <Header title='This is The Home Page' />
    <Navbar />
  </div>
 )

module.exports = Landing
