const React = require('react')
const shows = require('../public/data')

const Covers = () => (
  <pre><code>
    {JSON.stringify(shows, null, 4)}
  </code></pre>
)

module.exports = Covers