const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  	<div>
  		<h1> Evan Lian Music</h1>
  		<Link to='/bio'>Bio</Link>
  		<Link to='/covers'>Covers</Link>
  		<Link to='/contact'>Contact</Link>
  	</div>
 )

module.exports = Landing
