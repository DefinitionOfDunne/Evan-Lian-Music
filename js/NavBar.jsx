const React = require('react')
const { Link } = require('react-router')

const Navbar = React.createClass({
  render () {
    return (
      <div className={this.props.classname}>
        <Link to='/bio'>Bio</Link>
        <Link to='/covers'>Covers</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/gallery'>Gallery</Link>
      </div>
    )
  }
})

const { string } = React.PropTypes

Navbar.propTypes = {
  classname: string.isRequired
}

module.exports = Navbar
