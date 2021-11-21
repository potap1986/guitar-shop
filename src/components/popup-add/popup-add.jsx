import React from 'react';
import './popup-add.scss'

const PopupAdd = ({guitar}) => {
  return (
    <div>
      <h4>Добавить товар в корзину</h4>
      <button aria-label="Закрыть окно">
        <svg width="12" height="12">
          <use xlinkHref="#close" />
        </svg>
      </button>
      <div>
        <div>
          <img src={guitar.image} alt={guitar.name} />
          <div>
            <h3>{guitar.type} {guitar.name}</h3>
            <p>Артикул: {guitar.reference}</p>
            <p>{guitar.type}, {guitar.stringsCount} струнная</p>
            <div>{guitar.price}  ₽</div>
          </div>
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

export default PopupAdd 