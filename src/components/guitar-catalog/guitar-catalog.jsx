import React from 'react';
import './guitar-catalog.scss'
import { MAX_RATE } from '../../const';
import ActionCreator from '../../store/actions'
import { formatedNumber } from '../../utils';
import {connect} from 'react-redux'
import PropTypes from "prop-types";

const GuitarCatalog = (props) => {
  return (
    <div className="guitar-catalog"
    onMouseDown={() => {
     props.onSetGuitar(props.guitar);
    }}>
      <img className="guitar__image" src={props.guitar.image} alt={props.guitar.name} />
      <div className="guitar__rating">
        <div className="guitar-catalog__stars guitar-catalog__stars-active">
          <span style={{width: `${1 + (props.guitar.rating) * 100 / MAX_RATE}%`}}></span>
        </div>
        <span>{props.guitar.reviewsCount}</span>
      </div>
      <div className="guitar-catalog__info">
        <span>{props.guitar.name}</span>
        <span>{formatedNumber(props.guitar.price)} ₽</span>
      </div>
      <div className="guitar-catalog__buttons">
        <button className="guitar-catalog__button guitar-catalog__button--left button button--gray">Подробнее</button>
        <button className="guitar-catalog__button guitar-catalog__button--right button button orange" onClick={() => props.onPopupAddOpen()}>
          <svg width="11" height="11">
            <use xlinkHref="#buy" />
          </svg>
          Купить
        </button>
      </div>
    </div>
  )
}


GuitarCatalog.propTypes = {
	visibleAdd: PropTypes.bool.isRequired,
  activeGuitar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reference:  PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    type:  PropTypes.string.isRequired,
    reviewsCount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    stringsCount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image:  PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }),
  guitar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reference:  PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    type:  PropTypes.string.isRequired,
    reviewsCount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    stringsCount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image:  PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }),
  onSetGuitar: PropTypes.func.isRequired,
  onPopupAddOpen: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
	return {
		activeGuitar: state.activeGuitar,
		visibleAdd: state.isPopupAddVisible
	}
};

const mapDispatchToProps = (dispatch) => ({
  onSetGuitar: (guitar) => {
    dispatch(ActionCreator.setActiveGuitar(guitar));
  },
  onPopupAddOpen: () => {
    dispatch(ActionCreator.openPopupAdd());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GuitarCatalog)