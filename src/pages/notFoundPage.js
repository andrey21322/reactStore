import React, { Component } from 'react';

export class notFoundPage extends Component {
  render() {
    return (
      <div className='Error-page'>
        <h2>ERROR 404</h2> 
        <h3>page not found :(</h3> 
        <a href={'/home'}>Go to store</a>
      </div>
    )
  }
}

export default notFoundPage