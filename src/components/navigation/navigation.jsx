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

  return (
    <div className="navigation">
      <button id={Page.ONE} onClick={changeActivePage} className={"navigation__button button" + (activePage === Page.ONE ?  " navigation__button--active" : "")}>{Page.ONE}</button>
      <button id={Page.TWO} onClick={changeActivePage} className={"navigation__button button" + (activePage === Page.TWO ?  " navigation__button--active" : (activePage !== Page.ONE && pages !== Page.THREE ? " visually-hidden" : ""))}>{Page.TWO}</button>
      <button className={"navigation__button navigation__button--unactive  button" + (pages === Page.THREE || (activePage <= Page.TWO) ? " visually-hidden" : "")}>...</button>
      {(activePage > Page.TWO && activePage < (pages - 1)) ? <button id={activePage} onClick={() => {}} className="navigation__button button navigation__button--active">{activePage}</button> : <></>}
      <button className={"navigation__button navigation__button--unactive  button" + (pages === Page.THREE || (activePage >= (pages - Page.ONE)) ? " visually-hidden" : "")}>...</button>
      <button id={pages - Page.ONE} onClick={changeActivePage} className={"navigation__button button" + (activePage === (pages - Page.ONE) && (pages !== Page.THREE) ?  " navigation__button--active" : (activePage !== pages || pages === Page.THREE ? " visually-hidden" : ""))}>{pages - Page.ONE}</button>
      <button id={pages} onClick={changeActivePage} className={"navigation__button button" + (activePage === pages ?  " navigation__button--active" : "")}>{pages}</button>
      <button onClick={goNextPage} className="navigation__button button">Далее</button>
    </div>
  )
}

Navigation.propTypes = {
  activePage: PropTypes.number.isRequired,
  onSetPage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		activePage: state.activePage,
	}
};

const mapDispatchToProps = (dispatch) => ({
  onSetPage: (page) => {
    dispatch(ActionCreator.setActivePage(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)