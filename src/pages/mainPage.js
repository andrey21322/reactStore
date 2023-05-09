import React, { Component } from 'react';
import Items from "./component/Items";
import Category from "./component/Category";
import ShowFullItem from "./component/ShowFullItem";
import Cart from './component/Cart';
import Pagination from './component/Pagination';

export class mainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          orders: [],
          currentItems: [],
          items: [
            {
              id: 1,
              title: 'Chair gray',
              img: 'gray.jpg',
              descr: 'gray chair',
              category: 'chairs',
              price: '49.99',
              count: 1
            },
            {
              id: 2,
              title: 'Chair white',
              img: 'whiteChair.jpg',
              descr: 'white chair',
              category: 'chairs',
              price: '50.99',
              count: 1
            },
            {
              id: 3,
              title: 'Chair dark',
              img: 'blackChair.jpg',
              descr: 'dark chair',
              category: 'chairs',
              price: '53.99',
              count: 1
            },
            {
              id: 4,
              title: 'Chair white D',
              img: 'whiteChairD.jpg',
              descr: 'White chair D',
              category: 'chairs',
              price: '129.99',
              count: 1
            },
            {
              id: 5,
              title: 'Table',
              img: 'table.jpg',
              descr: 'dark table',
              category: 'table',
              price: '1399.00',
              count: 1
            }
          ],
          ShowFullItem: false,
          fullItem: {},
          activeCategory: 'all',
          page: 1,
          contentPerPage: 3
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.minusOrderCount = this.minusOrderCount.bind(this)
        this.plusOrderCount = this.plusOrderCount.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
      }
      
      addToOrder(item) {
        let isInArr = false;
    
        this.state.orders.forEach(el => {
          if(el.id === item.id) {
            el.count++
            this.setState({orders: [...this.state.orders]})
            isInArr = true
          }
        })
    
        if(!isInArr){
          if(item.count !== 1 ){
            item.count = 1
          } 
          this.setState({orders: [...this.state.orders, item]})
        }
      }
      
      minusOrderCount(item) {
        this.state.orders.forEach(el => {
          if(el.id === item.id) {
            el.count--
            this.setState({orders: [...this.state.orders]})
            if(el.count === 0) {
              this.onDelete(el.id)
            }
          }
        })
      }
    
      plusOrderCount(item) {
        this.state.orders.forEach(el => {
          if(el.id === item.id) {
            el.count++
            this.setState({orders: [...this.state.orders]})
          }
        })
      }
    
      onDelete(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
      }
    
      chooseCategory(category) {
        if(category === 'all') {
          this.setState({currentItems: this.state.items, activeCategory: 'all', page: 1})
          return
        }
        
        this.setState({
          currentItems: this.state.items.filter(el => el.category === category),
          activeCategory: category, page: 1
        })
      }
    
      onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({ShowFullItem: !this.state.ShowFullItem})
      }

  render() {
    const pageCount = Math.ceil(this.state.currentItems.length / this.state.contentPerPage)
    const lastContentIndex = this.state.page * this.state.contentPerPage
    const firstContentIndex = lastContentIndex - this.state.contentPerPage
    const changePage = (direction) => {
        if (direction) {
          if (this.state.page === pageCount) {
            return pageCount
          }
          return this.setState(prevState => {
            return {
              ...prevState,
              page: prevState.page + 1
            }
          })
        } else {
          if (this.state.page === 1) {
            return 1
          }
          return this.setState(prevState => {
            return {
              ...prevState,
              page: prevState.page - 1
            }
          })
        }
    }
    const setPage = (num) => {
      if (num > pageCount) {
        this.setState({
          page: pageCount
        })
      } else if (num < 1) {
        this.setState({
          page: 1
        })
      } else {
        this.setState({
          page: num
        })
      }
    }
    return (
      <div >
        <div className='presentation'></div>
        <Cart orders={this.state.orders} onDelete={this.onDelete} minusOrderCount={this.minusOrderCount} plusOrderCount={this.plusOrderCount} />
        <Category chooseCategory={this.chooseCategory} activeCategory={this.state.activeCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} firstContentIndex={firstContentIndex} lastContentIndex={lastContentIndex} />
        
        {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Pagination pageCount={pageCount} setPage={setPage} page={this.state.page} changePage={changePage}/>
      </div>
      
    )
  }
}

export default mainPage