import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    let arr = this.props.items
    return (
      <main>
        {arr
        .slice(this.props.firstContentIndex, this.props.lastContentIndex)
        .map(el => (
            <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/>
        ))}
      </main>
    )
  }
}

export default Items