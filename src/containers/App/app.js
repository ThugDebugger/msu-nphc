import React from 'react';

require('./app.css');

export default React.createClass({
  render() {
    return (
      <div id="app">
        {this.props.children}
      </div>
    );
  }
});
