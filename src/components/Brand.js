const React = require('react');
import BrandLogo from '../images/evan-brand.png'

const Brand = React.createClass({
  render () {
    return (
      <div className='brand-logo'>
      	<img src={BrandLogo} className='logo' alt='logo' />
        <div className='logo-text-container'>
        <p className='logo-text'><span>E</span>van</p>
        <p className='logo-text'><span>L</span>ian</p>
        <p className='logo-text'><span>M</span>usic</p>
        </div>
        </div>
    )
  }
});

module.exports = Brand;