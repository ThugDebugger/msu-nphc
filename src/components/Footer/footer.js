import React from 'react';
import Info from '../../components/Info/info';

require('./footer.css');

export default React.createClass({
  render() {
    return (
      <div id="footer">
         <Info mrprop = "footer1" />
         <Info mrprop = "footer2" />
         <Info mrprop = "footer3" />
      </div>
    );
  }
});
