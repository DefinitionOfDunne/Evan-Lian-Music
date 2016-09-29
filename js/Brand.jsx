const React = require('react')

const Brand = React.createClass({
  render () {
    return (
      <div className='brand-logo'>
      	<img src={`public/img/evan-brand.png`} className='logo' />
        </div>
    )
  }
})

module.exports = Brand