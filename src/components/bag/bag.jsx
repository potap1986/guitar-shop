import "./bag.scss"
import React from 'react';
import { guitars } from "../../data";
import GuitarBag from "../guitar-bag/guitar-bag";

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
        <ul>
          {git.map((guitar, index) => (
            <GuitarBag
              key={guitar.id + index + index}
              guitar={guitar}  
            />
          ))}
        </ul>
        <div>
          <div>
            <h4>Промокод на скидку</h4>
            <span>Введите свой промокод, если он у вас есть. </span>
            <div>
              <label htmlFor="promo" className="visually-hidden">Промокод</label>
              <input className="" id="promo" name="promo" type="text" />
              <button>Применить купон</button>
            </div>
          </div>
          <div>
            <p>Всего  ₽</p>
            <button>Оформить заказ</button>
          </div>
        </div>      

      </div>
    </div>

  )
}

export default Bag