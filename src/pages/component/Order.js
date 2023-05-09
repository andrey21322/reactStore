import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'> 
        <img src={"./reactStore/img/" + this.props.item.img} alt={this.props.item.img}/>
        <h2>{this.props.item.title} <span className='span-x'>x{this.props.item.count}</span></h2>
        <b>{this.props.item.price} UAH</b> 
        <div className='minusOrderCount' onClick={() => this.props.minusOrderCount(this.props.item)}>-</div>
        <div className='plusOrderCount' onClick={() => this.props.plusOrderCount(this.props.item)}>+</div>
        <FaTrash onClick={() => this.props.onDelete(this.props.item.id)} className='deleteIcon'/>
      </div>
    )
  }
}

export default Order