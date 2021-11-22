import "./bag.scss"
import React from 'react';
import { guitars } from "../../data";
import GuitarBag from "../guitar-bag/guitar-bag";
import { formatedNumber } from "../../utils";

const Bag = () => {
  const git = guitars.slice(0, 2)

  return (
    <div className="bag">
      <div className="bag__container container">  
        <div className="bag__head">
          <h2>Корзина</h2>
          <p>
            Главная  
            <svg width="12" height="7">
              <use xlinkHref="#arrow" />
            </svg>
            Каталог
            <svg width="12" height="7">
              <use xlinkHref="#arrow" />
            </svg>
            Оформляем
          </p>
        </div>      
        <div className="bag__list">
          {git.map((guitar, index) => (
            <GuitarBag
              key={guitar.id + index + index}
              guitar={guitar}  
            />
          ))}
        </div>
        <div className="bag__footer">
          <div>
            <h4 className="bag__promo-title">Промокод на скидку</h4>
            <span className="bag__promo-info">Введите свой промокод, если он у вас есть. </span>
            <div>
              <label htmlFor="promo" className="visually-hidden">Промокод</label>
              <input className="bag__promo__input" id="promo" name="promo" type="text" />
              <button className="bag__promo-button">Применить купон</button>
            </div>
          </div>
          <div>
            <p className="bag__sum">Всего: {formatedNumber(47000)}  ₽</p>
            <button className="bag__button">Оформить заказ</button>
          </div>
        </div>      

      </div>
    </div>

  )
}

export default Bag