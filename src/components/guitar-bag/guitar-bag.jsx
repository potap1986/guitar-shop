import React from 'react';
import './guitar-bag.scss'
import {formatedNumber} from '../../utils'

const GuitarBag = ({guitar}) => {
  return (
    <div className="guitar-bag">
      <button className="guitar-bag__close" aria-label="Удалить">
        <svg width="12" height="12">
          <use xlinkHref="#close" />
        </svg>
      </button>
      <img className="guitar-bag__image" src={guitar.image} alt={guitar.name} />
      <div className="guitar-bag__info">
        <h3 className="guitar-bag__title">{guitar.type} {guitar.name}</h3>
        <p>Артикул: {guitar.reference}</p>
        <p>{guitar.type}, {guitar.stringsCount} струнная</p>
      </div>
      <div className="guitar-bag__price">{formatedNumber(guitar.price)}  ₽</div>
      <div className="guitar-bag__buttons">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
      <div className="guitar-bag__sum">{formatedNumber(guitar.price)}  ₽</div>
    </div>
  )
}

export default GuitarBag