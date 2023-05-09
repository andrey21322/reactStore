import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import MainPage from "./pages/mainPage";
import AboutPage from "./pages/aboutPage";
import NotFoundPage from "./pages/notFoundPage";
import Header from "./pages/component/header";
import ContactsPage from "./pages/contactsPage";


class App extends Component {

  render() {
    return (
      <>
        <header className="wrapper">
          <Header orders={this.props.orders} onDelete={this.props.onDelete} minusOrderCount={this.props.minusOrderCount} plusOrderCount={this.props.plusOrderCount}/>
          <Routes>
            <Route path="/home" element={<MainPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/contacts" element={<ContactsPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
          
        </header>
      </>
     );
  }
}

export default App;
