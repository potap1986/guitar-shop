import React from 'react';
import "./filter.scss"
import { StringsCount } from '../../const'

const Filter = () => {
  return (
    <div className="filter">
      <h3 className="filter__head">Фильтр</h3>
      <form action="#">
        <div className="filter__section">
          <h4 className="filter__title">Цена, ₽</h4>
          <div>
            <label htmlFor="min-price" className="visually-hidden">Минимальная цена</label>
            <input className="filter__input" name="min-price" id="min-price" type="text" />
            <span>—</span>
            <label htmlFor="max-price" className="visually-hidden">Максимальная цена</label>
            <input className="filter__input" name="max-price" id="max-price" type="text" />
          </div>
        </div>
        <div className="filter__section">
          <h4 className="filter__title">Тип гитар</h4>
          <input className="filter__input-checkbox visually-hidden" id="acoustic" name="acoustic" type="checkbox" />
          <label className="filter__checkbox" htmlFor="acoustic">Акустические гитары</label>
          <input className="filter__input-checkbox visually-hidden" id="electro" name="electro" type="checkbox" />
          <label className="filter__checkbox" htmlFor="electro">Электрогитары</label>
          <input className="filter__input-checkbox visually-hidden" id="ukulele" name="ukulele" type="checkbox" />
          <label className="filter__checkbox" htmlFor="ukulele">Укулеле</label>
        </div>
        <div className="filter__section">
          <h4 className="filter__title">Количество струн</h4>
          <input className="filter__input-checkbox visually-hidden" id="four" name="four" type="checkbox" />
          <label className="filter__checkbox" htmlFor="four">{StringsCount.FOUR}</label>
          <input className="filter__input-checkbox visually-hidden" id="six" name="six" type="checkbox" />
          <label className="filter__checkbox" htmlFor="six">{StringsCount.SIX}</label>
          <input className="filter__input-checkbox visually-hidden" id="seven" name="seven" type="checkbox" />
          <label className="filter__checkbox" htmlFor="seven">{StringsCount.SEVEN}</label>
          <input className="filter__input-checkbox visually-hidden" id="twelwe" name="twelwe" type="checkbox" />
          <label className="filter__checkbox" htmlFor="twelwe">{StringsCount.TWELVE}</label>
        </div>
        <button>ПОКАЗАТЬ</button>
      </form>
    </div>
  )
}

export default Filter