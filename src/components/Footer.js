const React = require('react');
const Navbar = require('./Navbar');
var FontAwesome = require('react-fontawesome');

const Footer = React.createClass({
  render () {
    return (
      <div className='footer'>
      	<div className='social-media-links'>
        <a className='footer-item' href='https://www.facebook.com/evan.lian.5' target='_blank'>
          <FontAwesome name='facebook' size='2x'/>
        </a>
        <a className='footer-item' href='https://twitter.com/EvanWill1ams' target='_blank'>
          <FontAwesome name='twitter' size='2x'/>
        </a>
        <a className='footer-item' href='https://soundcloud.com/evahnsan' target='_blank'>
            <FontAwesome name='soundcloud' size='2x'/>
        </a>
        </div>
        <Navbar classname='footer-nav' />
        <div className='footer-attributes'>
        <p>For booking inquires please contact ELMManagement@gmail.com</p>
        <p>Website Built & Maintained By @DefinitionOfDunne</p>
        </div>
      </div>
    )
  }
});

module.exports = Footer;
