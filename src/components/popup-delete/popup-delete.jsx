import React from 'react';
import './popup-delete.scss'

const PopupDelete = ({guitar}) => {
  return (
    <div>
      <h4>Удалить этот товар?</h4>
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
        <div>
          <button>Удалить товар</button>
          <button>Продолжить покупки</button>
        </div>
      </div>
    </div>
  )
}

export default PopupDelete