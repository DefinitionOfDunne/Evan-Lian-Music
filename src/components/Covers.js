const React = require('react');
const Header = require('./Header');
const songs = require('../../public/data');

const Covers = React.createClass({
  render () {
    const covers = songs.covers.map(function (song) {
      return <li className='covers-li' key={song.id}>
        <h2>{song.title}</h2>
        <iframe src={`https://www.youtube.com/embed/${song.link}?autoplay=0`} frameBorder='0'></iframe>
      </li>
    })
    return (
      <div className='covers-content'>
      <Header title='Covers Page' />
      <ul className='cover-ul-wrapper'> {covers} </ul>
    </div>
    )
  }
});

module.exports = Covers;

