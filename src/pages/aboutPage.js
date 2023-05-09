import React, { useState } from 'react'
import './aboutPage.css'

function AboutPage () {

  let [currentIdx, setCurrentIdx] = useState(0);
  let [prevDisb, setPrevDisb] = useState(true);
  let [nextDisb, setNextDisb] = useState(false);
  const listItem = [
    {
      title: 'Who are we?',
      describe: 'We are the store which is in the first place in the world market',
      image: '1.jpg',
      bgColor: 'rgb(7, 7, 125)',
      target: 'target 1',
      training: 'training 1'
    },
    {
      title: 'Lorem',
      describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      image: '2.jpg',
      bgColor: 'green',
      target: 'target 2',
      training: 'training 2'
    },
    {
      title: 'Ipsum',
      describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      image: '3.jpg',
      bgColor: 'yellow',
      target: 'target 3',
      training: 'training 3'
    }
  ]
  
  const setActive = (num) => {
    setCurrentIdx(num)
    num === 0 ? setPrevDisb(true) : setPrevDisb(false)
    num === listItem.length - 1 ? setNextDisb(true) : setNextDisb(false)
  }
  const prevBtn = () => {
    let num = currentIdx - 1
    setActive(num)
  }
  const nextBtn = () => {
    let num = currentIdx + 1
    setActive(num)
  }
  return (
    <div className='About-page'>
      <div className="carousel">
        <div className="carousel-bg-wrapper"> 
          <img src={"../reactStore/img/" + listItem[currentIdx].image} alt={listItem[currentIdx].image} className="carousel-bg active"/>
        </div>
        <div className="carousel-inner">
            <div className="carousel-indicators">
                <span className="line"></span>
                {listItem.map((i, idx) => (
                  <span key={idx} className={`${idx == currentIdx ? "number active" : "number"}`}></span>
                ))}
            </div>
            <div className="carousel-control">
                <button disabled={prevDisb} onClick={prevBtn} className="prev">{"<"}</button>
                <button disabled={nextDisb} onClick={nextBtn} className="next">{">"}</button>
            </div>
            <div className="content-wrapper">
              {listItem.map((item, idx) => (
                <div className={`${idx == currentIdx ? "content active" : "content"}`} key={idx}>
                  <h1 className="name" style={{"--i": currentIdx}}>
                    {item.title}
                  </h1>
                  <div className="describe" style={{"--i": currentIdx}}>
                    <p>{item.describe}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="slide-wrapper">
                <div className="slide" style={{"--i": currentIdx}}>
                  {listItem.map((item, idx) => (
                    <div className={`${idx == currentIdx ? "item-wrapper active" : "item-wrapper"}`} key={idx}>
                      <div className="item" style={{'--bg': item.bgColor}}>
                          <img src={"../reactStore/img/" + item.image} alt={item.image}/>
                      </div>
                    </div>
                  ))}
                </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AboutPage