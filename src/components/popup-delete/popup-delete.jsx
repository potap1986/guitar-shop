import React, { Component }  from 'react';
import './popup-delete.scss'
import FocusTrap from 'focus-trap-react'
import ScrollLock from 'react-scrolllock'
import { connect } from 'react-redux';
import { formatedNumber } from '../../utils';
import PropTypes from "prop-types";
import ActionCreator from '../../store/actions'

class PopupDelete extends Component {
  constructor(props) {
    super(props);
    this.escPressHandler = this.escPressHandler.bind(this);
  }
  
  escPressHandler(evt) {
    if (evt.key === 'Escape') {
      this.props.onPopupDeleteClose();
    }
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.escPressHandler);
  }

  render() {
    
    document.addEventListener('keydown', this.escPressHandler);
    
    const guitar = this.props.guitar
      return (
        <FocusTrap>
          <div className="popup-delete"
            onClick={(evt) => {
              if (!evt.target.closest('.popup-delete__wrapper')) {
                this.props.onPopupDeleteClose();
            }}}>
            <ScrollLock>
              <div className="popup-delete__wrapper">
                <h4 className="popup-delete__title">Удалить этот товар?</h4>
                <button
                  className="popup-delete__close" 
                  onClick={this.props.onPopupDeleteClose}
                  aria-label="Закрыть окно"
                >
                  <svg width="12" height="12">
                    <use xlinkHref="#close" />
                  </svg>
                </button>
                <div className="popup-delete__section">
                  <img className="popup-delete__image" src={guitar.image} alt={guitar.name} />
                  <div className="popup-delete__info">
                    <h3>гитара {guitar.name}</h3>
                    <p>Артикул: {guitar.reference}</p>
                    <p>{guitar.type}, {guitar.stringsCount} струнная</p>
                    <div>Цена: {formatedNumber(guitar.price)}  ₽</div>
                  </div>
                  <div className="popup-delete__buttons">
                    <button 
                      className="popup-delete__button popup-delete__button--orange"
                      onMouseDown={() => {
                      this.props.onDeleteItemBag(this.props.guitar);
                      this.props.onPopupDeleteClose()
                      }}
                    >
                      Удалить товар</button>
                    <button className="popup-delete__button  popup-delete__button--white" onClick={this.props.onPopupDeleteClose}>Продолжить покупки</button>
                  </div>
                </div>
              </div>
            </ScrollLock>
          </div>
        </FocusTrap>
      )
    }
  }

PopupDelete.propTypes = {
	visibleDelete: PropTypes.bool.isRequired,
	onPopupDeleteClose: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
	return {
		guitar: state.activeGuitar,
		visibleDelete: state.isPopupDeleteVisible
	}
};

const mapDispatchToProps = (dispatch) => ({
  onPopupDeleteClose: () => {
    dispatch(ActionCreator.closePopupDelete());
  },
  onDeleteItemBag: (guitar) => {
    dispatch(ActionCreator.deleteItemBag(guitar));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupDelete)