import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <img src={"./reactStore/img/" + this.props.item.img} alt={this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.descr}</p>
            <div className='price-and-plus'> 
                <b>{this.props.item.price} UAH</b> 
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem