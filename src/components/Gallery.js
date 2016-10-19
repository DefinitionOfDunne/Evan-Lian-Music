import React from 'react';
import ImageGallery from 'react-image-gallery';
import Header from './Header';

class Gallery extends React.Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const images = [
      {
        original: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/13770354_10207395843115207_3552083306283032025_n.jpg?oh=9aaf724d2c4d155662f854c571efccea&oe=58722957',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: 'Grand Rapids Poetry Slam, 2013'
      },
      {
        original: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/309584_269503146421439_778197965_n.jpg?oh=9c9cdf4590a26cc00d70af1b145e9658&oe=58635F94',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/',
        description: 'Monster Mash Grand Rapids, 2011'
      }
    ]

    return (
      <div>
      <Header title='Gallery' />
      <ImageGallery
        ref={i => this._imageGallery = i}
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
      </div>
    );
  }

};

module.exports = Gallery
