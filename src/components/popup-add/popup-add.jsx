import React, { Component }  from 'react';
import './popup-add.scss'
import FocusTrap from 'focus-trap-react'
import ScrollLock from 'react-scrolllock'
import { connect } from 'react-redux';
import { formatedNumber } from '../../utils';
import PropTypes from "prop-types";
import ActionCreator from '../../store/actions'

class PopupAdd extends Component {
  constructor(props) {
    super(props);
    this.escPressHandler = this.escPressHandler.bind(this);
  }
  
  escPressHandler(evt) {
    if (evt.key === 'Escape') {
      this.props.onPopupAddClose();
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
        <div className="popup-add"
          onClick={(evt) => {
            if (!evt.target.closest('.popup-add__wrapper')) {
              this.props.onPopupAddClose();
          }}}>
          <ScrollLock>
            <div className="popup-add__wrapper">
              <h4 className="popup-add__title">Добавить товар в корзину</h4>
              <button
                className="popup-add__close button" 
                onClick={this.props.onPopupAddClose}
                aria-label="Закрыть окно"
              >
                <svg width="12" height="12">
                  <use xlinkHref="#close" />
                </svg>
              </button>
              <div className="popup-add__section">
                <img className="popup-add__image" src={guitar.image} alt={guitar.name} />
                <div className="popup-add__info">
                  <h3>гитара {guitar.name}</h3>
                  <p>Артикул: {guitar.reference}</p>
                  <p>{guitar.type}, {guitar.stringsCount} струнная</p>
                  <div>Цена: {formatedNumber(guitar.price)}  ₽</div>
                </div>
                <div className="popup-add__buttons">          
                  <button type="button" className="popup-add__button popup-add__button--orange button button--orange" 
                    onMouseDown={() => {
                    this.props.onAddBag(this.props.guitar);
                    this.props.onPopupAddClose()
                    this.props.onPopupInfoOpen()
                    }}
                  >
                    Добавить в корзину</button>
                </div>
              </div>
            </div>
          </ScrollLock>
        </div>
      </FocusTrap>
    )
  }
}

PopupAdd.propTypes = {
	visibleAdd: PropTypes.bool.isRequired,
  visibleInfo: PropTypes.bool.isRequired,
	onPopupAddClose: PropTypes.func.isRequired,
	onPopupInfoOpen: PropTypes.func.isRequired,
	onAddBag: PropTypes.func.isRequired,
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
}


const mapStateToProps = (state) => {
	return {
		guitar: state.APP.activeGuitar,
		visibleAdd: state.APP.isPopupAddVisible,
    visibleInfo: state.APP.isPopupInfoVisible,
	}
};

const mapDispatchToProps = (dispatch) => ({
  onPopupInfoOpen: () => {
    dispatch(ActionCreator.openPopupInfo());
  },
  onPopupAddClose: () => {
    dispatch(ActionCreator.closePopupAdd());
  },
  onAddBag: (guitar) => {
    dispatch(ActionCreator.addBag(guitar));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupAdd) 