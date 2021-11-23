import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Catalog from '../catalog/catalog'
import Bag from '../bag/bag'
import {Route, Routes } from "react-router-dom";
import { connect } from 'react-redux'
import PopupAdd from '../popup-add/popup-add';
import PopupDelete from '../popup-delete/popup-delete'
import PopupInfo from '../popup-info/popup-info'


const App = (props) =>  {

  React.useEffect(() => {
    renderPopup(props.visibleAdd, PopupAdd)
  }, [props.visibleAdd])
  
  React.useEffect(() => {
    renderPopup(props.visibleDelete, PopupDelete)
  }, [props.visibleDelete])

  React.useEffect(() => {
    renderPopup(props.visibleInfo, PopupInfo)
  }, [props.visibleInfo])

  const renderPopup = (visible, Popup) => {
  return visible 
  ? <Popup />
  : null}
  

  return (
    <Fragment>
      <Header />
      <main className="page-main">
          <Routes>
            <Route exact path="/bag" element={<Bag bag={props.bag} />} />
            <Route exact path="/" element={<Catalog />} />
          </Routes>
      </main>
      <Footer />

      {renderPopup(props.visibleAdd, PopupAdd)}
      {renderPopup(props.visibleDelete, PopupDelete)}
      {renderPopup(props.visibleInfo, PopupInfo)}
    </Fragment>
  );
}

App.propTypes = {
	visibleAdd: PropTypes.bool.isRequired,
	visibleDelete: PropTypes.bool.isRequired,
	visibleInfo: PropTypes.bool.isRequired,
}


const mapStateToProps = (state) => {
	return {
		visibleAdd: state.isPopupAddVisible,   
		visibleDelete: state.isPopupDeleteVisible,    
		visibleInfo: state.isPopupInfoVisible,
    bag: state.bag
	}
};

export default connect(mapStateToProps)(App);
