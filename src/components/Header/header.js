import React from 'react';

require('./header.css');

export default React.createClass({
  render() {
    return (
      <div id="header">
        <div className="container">
          <div id="logo">
            <span> Logo </span>
          </div>

          <div id="nav">
            <span> Nav Menu </span>
          </div>
        </div>
      </div>
    );
  }
});
