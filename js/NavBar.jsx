const React = require('react')
const { Link } = require('react-router')

const Navbar = React.createClass({
  render () {
    return (
      <div>
        <Link className='navbar-item' to='/bio'>Bio</Link>
        <Link to='/covers'>Covers</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    )
  }
})

module.exports = Navbar
