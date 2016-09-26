const React = require('react')

const Footer = React.createClass({
  render () {
    return (
      <div className='footer'>
        <a className='footer-item' href='https://www.facebook.com/evan.lian.5' target='_blank'>Facebook</a>
        <a className='footer-item' href='https://twitter.com/EvanWill1ams' target='_blank'>Twitter</a>
        <a className='footer-item' href='https://soundcloud.com/evahnsan' target='_blank'>Soundcloud</a>
      </div>
    )
  }
})

module.exports = Footer
