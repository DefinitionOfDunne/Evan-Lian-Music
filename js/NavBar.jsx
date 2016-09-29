const React = require('react')
const { Link } = require('react-router')

const Navbar = React.createClass({
  render () {
    return (
      <div className={this.props.classname}>
        <Link className='navbar-item' to='/bio'>Bio</Link>
        <Link className='navbar-item' to='/covers'>Covers</Link>
        <Link className='navbar-item' to='/contact'>Contact</Link>
      </div>
    )
  }
})

const { string } = React.PropTypes

Navbar.propTypes = {
  classname: string.isRequired
}

module.exports = Navbar
