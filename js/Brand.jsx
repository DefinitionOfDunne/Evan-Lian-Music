const React = require('react')

const Brand = React.createClass({
  render () {
    return (
      <div className='brand-logo'>
      	<img src={`public/img/evan-brand.png`} className='logo' />
        <div className='logo-text-container'>
        <p className='logo-text'><span>E</span>van</p>
        <p className='logo-text'><span>L</span>ian</p>
        <p className='logo-text'><span>M</span>usic</p>
        </div>
        </div>
    )
  }
})

module.exports = Brand