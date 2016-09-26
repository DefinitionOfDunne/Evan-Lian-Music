const React = require('react')
const Navbar = require('./Navbar')
const Header = require('./Header')

const Landing = () => (
  <div>
    <Navbar />  
    <Header title='This is The Home Page' />
  </div>
 )

module.exports = Landing
