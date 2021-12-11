import "./bag.scss"
import React, { useState, useEffect } from 'react';
import GuitarBag from "../guitar-bag/guitar-bag";
import { formatedNumber } from "../../utils";
import { Promo } from "../../const";
import PropTypes from "prop-types";
import {NavLink} from 'react-router-dom'

const Bag = (props) => {

  const promoSales = {
    GITARAHIT: {
      title: 'GITARAHIT',
      percent: 10,
      discount: 0,
    },
    SUPERGITARA: {
      title: 'SUPERGITARA',
      percent: 0,
      discount: 700,
    },
    GITARA2020: {
      title: 'GITARA2020',
      percent: 30,
      discount: 3000,
    }
  }
  const [promo, setPromo] = useState("")
  const [sum, setSum] = useState(props.bag.totalAmount)

  useEffect(() => setSum(props.bag.totalAmount), [props.bag.totalAmount])

  const createBag = (bag) => {
    return (bag.guitars.length > 0 ?
      bag.guitars.map((guitar, index) => (
        <GuitarBag
          key={guitar.id + index + index}
          guitar={guitar}
        />
      ))
      :
      <h4 className="bag__null-title">Пока в корзине пусто</h4>)
  }

  const handlePromoChange = (evt) => {
    evt.preventDefault()
    setPromo(evt.target.value.trim())
    setSum(props.bag.totalAmount)
  }

  const getPromo = (promo) => {
    if (promo === Promo.GITARAHIT) {
      setSum(props.bag.totalAmount * (1 - promoSales.GITARAHIT.percent / 100))
    }
    if (promo === Promo.SUPERGITARA) {
      setSum(props.bag.totalAmount > promoSales.SUPERGITARA.discount ? props.bag.totalAmount - promoSales.SUPERGITARA.discount : props.bag.totalAmount)
    }
    if (promo === Promo.GITARA2020) {
      setSum(props.bag.totalAmount >= (promoSales.SUPERGITARA.discount * 100 / promoSales.SUPERGITARA.percent) ? props.bag.totalAmount - promoSales.SUPERGITARA.discount : props.bag.totalAmount * (1 - promoSales.GITARA2020.percent / 100))
    }
    if (promo !== Promo.GITARAHIT && promo !== Promo.SUPERGITARA && promo !== Promo.GITARA2020) {
      alert("Промокод не действителен")
    }
  }

  return (
    <div className="bag">
      <div className="bag__container container">
        <div className="bag__head">
          <h2>Корзина</h2>
          <p>
            <NavLink className="button" to="/#" exact="false">
              Главная
            </NavLink>
            <svg width="12" height="7">
              <use xlinkHref="#arrow" />
            </svg>
            <NavLink className="button" to="/" exact="false">
              Каталог
            </NavLink>
            <svg width="12" height="7">
              <use xlinkHref="#arrow" />
            </svg>
            Оформляем
          </p>
        </div>
        <div className="bag__list">
          {createBag(props.bag)
          }
        </div>
        <div className="bag__footer">
          <div>
            <h4 className="bag__promo-title">Промокод на скидку</h4>
            <span className="bag__promo-info">Введите свой промокод, если он у вас есть. </span>
            <div>
              <label htmlFor="promo" className="visually-hidden">Промокод</label>
              <input className="bag__promo-input" id="promo" name="promo" type="text" onChange={handlePromoChange} value={promo} disabled={props.bag.guitars.length > 0 ? false : true} />
              <button type="button" onClick={() => getPromo(promo)} className="bag__promo-button button button--gray" disabled={props.bag.guitars.length > 0 ? false : true}>Применить купон</button>
            </div>
          </div>
          <div>
            <p className="bag__sum">Всего: {formatedNumber(sum)}  ₽</p>
            <button type="button" onClick={() => { }} className="bag__button button button--orange" disabled={props.bag.guitars.length > 0 ? false : true}>Оформить заказ</button>
          </div>
        </div>

      </div>
    </div>

  )
}

Bag.propTypes = {
  bag: PropTypes.shape({
    guitars: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        reference: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        reviewsCount: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        stringsCount: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      })
    ).isRequired,
    totalAmount: PropTypes.number.isRequired,
  }).isRequired
}

export default Bag