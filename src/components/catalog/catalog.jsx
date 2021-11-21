import "./catalog.scss"
import React from 'react';
import Filter from '../filter/filter'
import Guitars from "../guitars/guitars";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog__container container">
        <div className="catalog__head">
          <h2>Каталог гитар</h2>
          <p>
            Главная  
            <svg width="12" height="7">
              <use xlinkHref="#arrow" />
            </svg>
            Каталог
          </p>
        </div>
        <div className="catalog__body">
          <Filter />
          <Guitars />
        </div>        
      </div>
    </div>

  )
}

export default Catalog