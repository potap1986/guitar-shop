import React from 'react';
import './guitar-catalog.scss'
import { MAX_RATE } from '../../const';
import ActionCreator from '../../store/actions'
import { formatedNumber } from '../../utils';
import {connect} from 'react-redux'

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
        <button className="guitar-catalog__button guitar-catalog__button--left">Подробнее</button>
        <button className="guitar-catalog__button guitar-catalog__button--right" onClick={() => props.onPopupAddOpen()}>
          <svg width="11" height="11">
            <use xlinkHref="#buy" />
          </svg>
          Купить
        </button>
      </div>
    </div>
  )
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