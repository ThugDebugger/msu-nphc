import React from 'react';
import { createStore } from 'redux';

const navReducer = (state = 0,action) =>{
    switch(action.type){
        case 'ADD':
          return action.value.className = 'active'
         
         case 'REMOVE':
          return action.value.className = ''
          
        default:
          return state;
    }   
}

const store = createStore(navReducer);
require('./header.css');

export default React.createClass({
  render() {
    return (
      <div id="header">
        <div className="container">
          <div id="logo">
        
          </div>

          <div id="nav">
          <ul>
            <li><a ref={node => {this.a1 = node;}} onMouseEnter ={() => {store.dispatch({ type: 'ADD', value: this.a1 })}} onMouseLeave ={() => {store.dispatch({ type: 'REMOVE', value: this.a1 })}} href = "#">one</a></li>
            <li><a ref={node => {this.a2 = node;}} onMouseEnter ={() => {store.dispatch({ type: 'ADD', value: this.a2 })}} onMouseLeave ={() => {store.dispatch({ type: 'REMOVE', value: this.a2 })}} href = "#">Two</a></li>
            <li><a ref={node => {this.a3 = node;}} onMouseEnter ={() => {store.dispatch({ type: 'ADD', value: this.a3 })}} onMouseLeave ={() => {store.dispatch({ type: 'REMOVE', value: this.a3 })}} href = "#">Three</a></li>
            <li><a ref={node => {this.a4 = node;}} onMouseEnter ={() => {store.dispatch({ type: 'ADD', value: this.a4 })}} onMouseLeave ={() => {store.dispatch({ type: 'REMOVE', value: this.a4 })}} href = "#">Four</a></li>
           </ul>
          </div>
        </div>
      </div>
    );
  }
});
