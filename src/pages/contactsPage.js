import React, { Component } from 'react'

export class ContactsPage extends Component {
  render() {
    return (
      <div className='Contact-page'>
        <h2>
          <div><a href={'https://t.me/fI0res'}><img src="/reactStore/img/paper-plane.png" alt="/img/paper-plane.png"/></a></div>
        </h2>
        <a href={'/home'}>Go to store</a>
      </div>
    )
  }
}

export default ContactsPage