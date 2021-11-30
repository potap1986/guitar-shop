import React from 'react';
import "./filter.scss"
import { IMaskInput } from 'react-imask'
import { StringsCount } from '../../const'
import PropTypes from "prop-types";
import { formatedNumber } from '../../utils';

const toBool = (value) => !!value;

const Filter = (props) => {

  const disabledString = {
    four: !props.filter.type.acoustic ? false : ((props.filter.type.electro || props.filter.type.ukulele) ? false : true),
    six: !props.filter.type.ukulele ? false : ((props.filter.type.electro || props.filter.type.acoustic) ? false : true),
    seven: !props.filter.type.ukulele ? false : ((props.filter.type.electro || props.filter.type.acoustic) ? false : true),
    twelve: !(props.filter.type.electro || props.filter.type.ukulele) ? false : (props.filter.type.acoustic ? false : true),
  }

  const handleMinPriceChange = (value) => { 
    props.setFilter({
      ...props.filter,
      on: true,
      price: {
        max: props.filter.price.max,
        min: String(value)
      }
    })
  }

  const handleMaxPriceChange = (value) => {
    props.setFilter({
      ...props.filter,
      on: true,
      price: {
        max: String(value),
        min: props.filter.price.min
      }
    })
  }

  const handleMinPriceOut = (evt) => {
    evt.preventDefault()
    let price = Number(props.filter.price.min)
    if (price < props.minPrice) {
      price = props.minPrice
    }
    if (price > props.maxPrice) {
      price = props.maxPrice
    }
    if (price > Number(props.filter.price.max)) {
      price = Number(props.filter.price.max)
    }
    props.setFilter({
      ...props.filter,
      price: {
        max: props.filter.price.max,
        min: String(price)
      }
    })
  }

  const handleMaxPriceOut = (evt) => {
    evt.preventDefault()
    let price = Number(props.filter.price.max)
    if (price < props.minPrice) {
      price = props.minPrice
    }
    if (price > props.maxPrice) {
      price = props.maxPrice
    }
    if (price < Number(props.filter.price.min)) {
      price = Number(props.filter.price.min)
    }
    props.setFilter({
      ...props.filter,
      price: {
        max: String(price),
        min: props.filter.price.min
      }
    })
  }

  const handleTypeChange = (evt) => {
    let maxPrice = props.filter.price.max
    let minPrice = props.filter.price.min
    props.setFilter(prevFilter => ({
      ...prevFilter,
      on: true,
      price: {
        max: (maxPrice === "") ? "" : (Number(maxPrice) > props.maxPrice ? String(props.maxPrice) : maxPrice),
        min: (minPrice === "") ? "" : (Number(minPrice) < props.minPrice ? String(props.minPrice) : minPrice),
      },
      type: {
        ...prevFilter.type,
        [evt.target.id]: !prevFilter.type[evt.target.id]
      }
    }))
  }

  const handleStringChange = (evt) => {
    let maxPrice = props.filter.price.max
    let minPrice = props.filter.price.min
    props.setFilter(prevFilter => ({
      ...prevFilter,
      on: true,
      price: {
        max: (maxPrice === "") ? "" : (Number(maxPrice) > props.maxPrice ? String(props.maxPrice) : maxPrice),
        min: (minPrice === "") ? "" : (Number(minPrice) < props.minPrice ? String(props.minPrice) : minPrice),
      },
      string: {
        ...prevFilter.string,
        [evt.target.id]: !prevFilter.string[evt.target.id]
      }
    }))
  }

  return (
    <div className="filter">
      <h3 className="filter__head">Фильтр</h3>
      <form action="#">
        <div className="filter__section">
          <h4 className="filter__title">Цена, ₽</h4>
          <div className="filter__input-text">
            <label htmlFor="min-price" className="visually-hidden">Минимальная цена</label>
            <IMaskInput
              value={props.filter.price.min}
              onAccept={handleMinPriceChange}
              onBlur={handleMinPriceOut}
              className="filter__input"
              placeholder={formatedNumber(props.minPrice)}
              name="min-price"
              id="min-price"
              unmask={true}
              mask={[
                { mask: '' },
                {
                  mask: 'num',
                  lazy: false,
                  blocks: {
                    num: {
                      mask: Number,
                      thousandsSeparator: ' ',
                    }
                  }
                }
              ]} />
            <span>—</span>
            <label htmlFor="max-price" className="visually-hidden">Максимальная цена</label>
            <IMaskInput
              value={props.filter.price.max}
              onAccept={handleMaxPriceChange}
              onBlur={handleMaxPriceOut}
              className="filter__input"
              name="max-price"
              id="max-price"
              placeholder={formatedNumber(props.maxPrice)}
              unmask={true}
              mask={[
                { mask: '' },
                {
                  mask: 'num',
                  lazy: false,
                  blocks: {
                    num: {
                      mask: Number,
                      thousandsSeparator: ' ',
                    }
                  }
                }
              ]} />
          </div>
        </div>
        <div className="filter__section">
          <h4 className="filter__title">Тип гитар</h4>
          <input
            onChange={handleTypeChange}
            checked={toBool(props.filter.type.acoustic)}
            value={toBool(props.filter.type.acoustic)}
            className="filter__input-checkbox visually-hidden"
            id="acoustic"
            name="acoustic"
            type="checkbox" />
          <label
            className="filter__checkbox"
            htmlFor="acoustic">Акустические гитары</label>
          <input
            onChange={handleTypeChange}
            checked={toBool(props.filter.type.electro)}
            value={toBool(props.filter.type.electro)}
            className="filter__input-checkbox visually-hidden"
            id="electro"
            name="electro"
            type="checkbox" />
          <label
            className="filter__checkbox"
            htmlFor="electro">Электрогитары</label>
          <input
            onChange={handleTypeChange}
            checked={toBool(props.filter.type.ukulele)}
            value={toBool(props.filter.type.ukulele)}
            className="filter__input-checkbox visually-hidden"
            id="ukulele"
            name="ukulele"
            type="checkbox" />
          <label
            className="filter__checkbox"
            htmlFor="ukulele">Укулеле</label>
        </div>
        <div className="filter__section">
          <h4 className="filter__title">Количество струн</h4>
          <input
            onChange={handleStringChange}
            checked={disabledString.four ? false : toBool(props.filter.string.four)}
            disabled={disabledString.four}
            className="filter__input-checkbox visually-hidden"
            id="four"
            name="four"
            type="checkbox" />
          <label
            className="filter__checkbox"
            htmlFor="four">{StringsCount.FOUR}</label>
          <input
            onChange={handleStringChange}
            checked={disabledString.six ? false : toBool(props.filter.string.six)}
            disabled={disabledString.six}
            className="filter__input-checkbox visually-hidden"
            id="six"
            name="six"
            type="checkbox" />
          <label
            className="filter__checkbox"
            htmlFor="six">{StringsCount.SIX}</label>
          <input
            onChange={handleStringChange}
            checked={disabledString.seven ? false : toBool(props.filter.string.seven)}
            disabled={disabledString.seven}
            className="filter__input-checkbox visually-hidden"
            id="seven"
            name="seven"
            type="checkbox" />
          <label
            className="filter__checkbox"
            htmlFor="seven">{StringsCount.SEVEN}</label>
          <input
            onChange={handleStringChange}
            checked={disabledString.twelve ? false : toBool(props.filter.string.twelve)}
            disabled={disabledString.twelve}
            className="filter__input-checkbox visually-hidden"
            id="twelve"
            name="twelve"
            type="checkbox" />
          <label
            className="filter__checkbox"
            htmlFor="twelve">{StringsCount.TWELVE}</label>
        </div>
        <button type="button" onClick={(evt) => { evt.preventDefault() }} className="filter__button button button--gray">ПОКАЗАТЬ</button>
      </form>
    </div>
  )
}

Filter.propTypes = {
  maxPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    on: PropTypes.bool.isRequired,
    price: PropTypes.shape({
      min: PropTypes.string,
      max: PropTypes.string
    }).isRequired,
    type: PropTypes.shape({
      acoustic: PropTypes.bool.isRequired,
      electro: PropTypes.bool.isRequired,
      ukulele: PropTypes.bool.isRequired,
    }).isRequired,
    string: PropTypes.shape({
      four: PropTypes.bool.isRequired,
      six: PropTypes.bool.isRequired,
      seven: PropTypes.bool.isRequired,
      twelve: PropTypes.bool.isRequired,
    }).isRequired
  }).isRequired
}



export default Filter