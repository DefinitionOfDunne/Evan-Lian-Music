const React = require('react');
const Navbar = require('./Navbar');
const Footer = require('./Footer');
const Brand = require('./Brand');
import '../component-stylesheets/style.css';

const Layout = (props) => (
  <div className='app-container'>
    <Navbar classname='header-nav' />
    <Brand />
    {props.children}
    <Footer />
  </div>
);

const { element } = React.PropTypes;

Layout.propTypes = {
  children: element.isRequired
};

module.exports = Layout;
