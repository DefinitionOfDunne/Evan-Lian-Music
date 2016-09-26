const React = require('react')
const Header = require('./Header')
const songs = require('../public/data')

const Covers = React.createClass({
  render () {
    const covers = songs.covers.map(function (song) {
      return <li>
        <h1>{song.title}</h1>
        <iframe src={`https://www.youtube-nocookie.com/embed/${song.link}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0'></iframe>
      </li>
    })
    return (
      <div className='title'>
      <Header title='Covers Page' />
      <ul> {covers} </ul>
    </div>
    )
  }
})

module.exports = Covers
