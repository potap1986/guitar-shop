import React from 'react';
import './guitar-bag.scss'
import {formatedNumber} from '../../utils'
import ActionCreator from '../../store/actions'
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const GuitarBag = (props) => {
  return (
    <div className="guitar-bag"
      onMouseDown={() => {
        props.onSetGuitar(props.guitar);
      }}
    >
      <button type="button" className="guitar-bag__close button" onClick={() => props.onPopupDeleteOpen()} aria-label="Удалить">
        <svg width="12" height="12">
          <use xlinkHref="#close" />
        </svg>
      </button>
      <img className="guitar-bag__image" src={props.guitar.image} alt={props.guitar.name} />
      <div className="guitar-bag__info">
        <h3 className="guitar-bag__title">{props.guitar.type} {props.guitar.name}</h3>
        <p>Артикул: {props.guitar.reference}</p>
        <p>{props.guitar.type}, {props.guitar.stringsCount} струнная</p>
      </div>
      <div className="guitar-bag__price">{formatedNumber(props.guitar.price)}  ₽</div>
      <div className="guitar-bag__buttons">
        <button type="button" className="button"
          onClick={() => (props.guitar.amount === 1 ? props.onPopupDeleteOpen() : props.onDeleteBag(props.guitar))}
        >
          -
        </button>
        <span>{props.guitar.amount}</span>
        <button type="button" className="button"
          onClick={() => props.onAddBag(props.guitar)}
        >
          +
        </button>
      </div>
      <div className="guitar-bag__sum">{formatedNumber(props.guitar.price * props.guitar.amount)}  ₽</div>
    </div>
  )
}

GuitarBag.propTypes = {
	visibleDelete: PropTypes.bool.isRequired,
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
  onPopupDeleteOpen: PropTypes.func.isRequired,
  onDeleteBag: PropTypes.func.isRequired,
  onAddBag: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
	return {
		activeGuitar: state.APP.activeGuitar,
		visibleDelete: state.APP.isPopupDeleteVisible
	}
};

const mapDispatchToProps = (dispatch) => ({
  onSetGuitar: (activeGuitar) => {
    dispatch(ActionCreator.setActiveGuitar(activeGuitar));
  },
  onPopupDeleteOpen: () => {
    dispatch(ActionCreator.openPopupDelete());
  },
  onDeleteBag: (guitar) => {
    dispatch(ActionCreator.deleteBag(guitar));
  },
  onAddBag: (guitar) => {
    dispatch(ActionCreator.addBag(guitar));
  },
});


export default connect(mapStateToProps, mapDispatchToProps) (GuitarBag)