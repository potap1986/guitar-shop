import React from 'react';
import './guitar-catalog.scss'
import { MAX_RATE } from '../../const';

const GuitarCatalog = ({guitar}) => {
  return (
    <div>
      <img src={guitar.image} alt={guitar.name} />
      <div>
        <div className="guitar-catalog__stars guitar-catalog__stars-active">
          <span style={{width: `${1 + (guitar.rating) * 100 / MAX_RATE}%`}}></span>
        </div>
        <div>{guitar.reviewsCount}</div>
      </div>
      <div>
        <span>{guitar.name}</span>
        <span>{guitar.price} ₽</span>
      </div>
      <div>
        <button>Подробнее</button>
        <button>
          <svg width="11" height="11">
            <use xlinkHref="#buy" />
          </svg>
          Купить
        </button>
      </div>
    </div>
  )
}

export default GuitarCatalog