import React, { Component, Fragment } from 'react';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Catalog from '../catalog/catalog'
import Bag from '../bag/bag'
import {Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className="page-main">
            <Routes>
              <Route exact path="/bag" element={<Bag />} />
              <Route exact path="/" element={<Catalog />} />
            </Routes>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App
