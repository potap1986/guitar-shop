import React from 'react';
import './popup-info.scss'
import {NavLink} from 'react-router-dom'

const PopupInfo = () => {
  return (
    <div>
      <h4>Товар успешно добавлен в корзину</h4>
      <button aria-label="Закрыть окно">
        <svg width="12" height="12">
          <use xlinkHref="#close" />
        </svg>
        <div>
          <NavLink to="/bag" exact="false">
            Перейти в корзину
          </NavLink>
          <button>Продолжить покупки</button>
        </div>
      </button>

    </div>
    

  )
}

export default PopupInfo 