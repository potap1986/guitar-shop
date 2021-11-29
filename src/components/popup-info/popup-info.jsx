import React, { Component }  from 'react';
import './popup-info.scss'
import {NavLink} from 'react-router-dom'
import FocusTrap from 'focus-trap-react'
import ScrollLock from 'react-scrolllock'
import PropTypes from "prop-types";
import ActionCreator from '../../store/actions'
import { connect } from 'react-redux';

class PopupInfo extends Component {
  constructor(props) {
    super(props);
    this.escPressHandler = this.escPressHandler.bind(this);
  }
  
  escPressHandler(evt) {
    if (evt.key === 'Escape') {
      this.props.onPopupInfoClose();
    }
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.escPressHandler);
  }

  render() {
    
    document.addEventListener('keydown', this.escPressHandler);

    return (
      <FocusTrap >
      <div className="popup-info"
        onClick={(evt) => {
          if (!evt.target.closest('.popup-info__wrapper')) {
            this.props.onPopupInfoClose();
        }}}>
        <ScrollLock>
          <div className="popup-info__wrapper">
            <h4 className="popup-info__title">Товар успешно добавлен в корзину</h4>
            <button type="button" 
              className="popup-info__close button" 
              onClick={this.props.onPopupInfoClose} 
              aria-label="Закрыть окно"
            >
              <svg width="12" height="12">
                <use xlinkHref="#close" />
              </svg>
            </button>
            <div className="popup-info__buttons">
              <NavLink onClick={this.props.onPopupInfoClose} className="popup-info__button popup-info__button--orange button button--orange" to="/bag" exact="false">
                Перейти в корзину
              </NavLink>
              <button type="button" className="popup-info__button popup-info__button--white button button--white" onClick={this.props.onPopupInfoClose} >Продолжить покупки</button>
            </div>
          </div>
        </ScrollLock>
      </div>
      </FocusTrap>
    )
  }
}

PopupInfo.propTypes = {
	visibleInfo: PropTypes.bool.isRequired,
	onPopupInfoClose: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
	return {
		visibleInfo: state.APP.isPopupInfoVisible
	}
};

const mapDispatchToProps = (dispatch) => ({
  onPopupInfoClose: () => {
    dispatch(ActionCreator.closePopupInfo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps) (PopupInfo) 