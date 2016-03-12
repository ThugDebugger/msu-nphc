import React from 'react';

require('./info.css');

export default React.createClass({
  render() {
    console.log(this.props.mrprop);
    return (
      <div className = "container" id={this.props.mrprop}>
        <p> TestTestTest TestTest</p>
        <p>TestTestTest</p>
        <p>TestTestTest</p>
        <p>TestTestTest</p>
        <p>TestTestTest</p>
        <p>TestTestTest</p>  
      </div>
    );
  }
});
