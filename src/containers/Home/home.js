import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

require('./home.css');

export default React.createClass({
  render() {
    return (
      <div id="home">
        <Header />

        <div id="main">
        </div>

        <Footer />
      </div>
    );
  }
});
