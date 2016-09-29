const React = require('react')
const Navbar = require('./Navbar')
const Footer = require('./Footer')

const Layout = (props) => (
  <div className='app-container'>
    <Navbar classname='header-nav' />
    {props.children}
    <Footer />
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
