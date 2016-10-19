
const React = require('react');
const div = React.DOM.div
const h1 = React.DOM.h1

const Header = React.createClass({
  render () {
    return (
      <div className='title'>
        <h1>
          {this.props.title}
        </h1>
      </div>
    )
  }
});

Header.propTypes = {
  title: React.PropTypes.string
};

module.exports = Header;
