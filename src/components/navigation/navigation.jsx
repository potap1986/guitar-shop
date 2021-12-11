import React from 'react';
import './navigation.scss'
import ActionCreator from '../../store/actions'
import {Page, GUITARS_ON_PAGE} from '../../const'
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const Navigation = (props) => {
  const activePage = props.activePage
  const pages = Math.ceil(props.guitars.length / GUITARS_ON_PAGE)
  const changeActivePage = (evt) => {
    if (activePage !== Number(evt.target.id)) {
      props.onSetPage(Number(evt.target.id))
    }
  }

  const goNextPage = () => {
    if (activePage !== pages) {
      props.onSetPage(activePage + Page.ONE)
    }
  }

  const goPrevPage = () => {
    if (activePage !== Page.ONE) {
      props.onSetPage(activePage - Page.ONE)
    }
  }

  return (
    <div className="navigation">
      {pages <= Page.ONE || Page.ONE === activePage ? <></> : <button type="button" onClick={goPrevPage} className="navigation__button navigation__button--prev button">Назад</button>}
      {pages < Page.ONE ? <></> : <button type="button" id={Page.ONE} onClick={changeActivePage} className={"navigation__button button" + (activePage === Page.ONE ?  " navigation__button--active" : "")}>{Page.ONE}</button>}
      {pages <= Page.ONE ? <></> : <button type="button" id={Page.TWO} onClick={changeActivePage} className={"navigation__button button" + (activePage === Page.TWO ?  " navigation__button--active" : (activePage !== Page.ONE && pages !== Page.THREE ? " visually-hidden" : ""))}>{Page.TWO}</button>}
      <button type="button" className={"navigation__button navigation__button--unactive  button" + (pages === Page.THREE || (activePage <= Page.TWO) ? " visually-hidden" : "")}>...</button>
      {(activePage > Page.TWO && activePage < (pages - 1)) ? <button type="button" id={activePage} onClick={() => {}} className="navigation__button button navigation__button--active">{activePage}</button> : <></>}
      <button type="button" className={"navigation__button navigation__button--unactive  button" + (pages === Page.THREE || (activePage >= (pages - Page.ONE)) ? " visually-hidden" : "")}>...</button>
      {pages < Page.THREE ? <></> : <button type="button" id={pages - Page.ONE} onClick={changeActivePage} className={"navigation__button button" + (activePage === (pages - Page.ONE) && (pages !== Page.THREE) ?  " navigation__button--active" : (activePage !== pages || pages === Page.THREE ? " visually-hidden" : ""))}>{pages - Page.ONE}</button>}
      {pages < Page.THREE ? <></> : <button type="button" id={pages} onClick={changeActivePage} className={"navigation__button button" + (activePage === pages ?  " navigation__button--active" : "")}>{pages}</button>}
      {pages <= Page.ONE || pages === activePage ? <></> : <button type="button" onClick={goNextPage} className="navigation__button navigation__button--next button">Далее</button>}
    </div>
  )
}

Navigation.propTypes = {
  activePage: PropTypes.number.isRequired,
  onSetPage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		activePage: state.APP.activePage,
	}
};

const mapDispatchToProps = (dispatch) => ({
  onSetPage: (page) => {
    dispatch(ActionCreator.setActivePage(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)