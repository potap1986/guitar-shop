import React from 'react';
import './guitar-catalog.scss'
import { MAX_RATE } from '../../const';

const GuitarCatalog = ({guitar}) => {
  return (
    <div className="guitar-catalog">
      <img className="guitar__image" src={guitar.image} alt={guitar.name} />
      <div className="guitar__rating">
        <div className="guitar-catalog__stars guitar-catalog__stars-active">
          <span style={{width: `${1 + (guitar.rating) * 100 / MAX_RATE}%`}}></span>
        </div>
        <span>{guitar.reviewsCount}</span>
      </div>
      <div className="guitar-catalog__info">
        <span>{guitar.name}</span>
        <span>{guitar.price} ₽</span>
      </div>
      <div className="guitar-catalog__buttons">
        <button className="guitar-catalog__button guitar-catalog__button--left">Подробнее</button>
        <button className="guitar-catalog__button guitar-catalog__button--right">
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