import "./catalog.scss"
import React, {useState} from 'react';
import Filter from '../filter/filter'
import Guitars from "../guitars/guitars";
import {connect} from 'react-redux'
import {getMinPrice, getMaxPrice, getFiltered} from '../../utils'
import PropTypes from "prop-types";
import {GUITARS_ON_PAGE, Number} from '../../const'
import {NavLink} from 'react-router-dom'

const Catalog = (props) => {
  const [filter, setFilter] = useState({
    on: false,
    price: {
      min: "",
      max: ""
    },
    type: {
      acoustic: false,
      electro: false,
      ukulele: false
    },
    string: {
      four: false,
      six: false,
      seven: false,
      twelve: false,
    }
  })
  const filtredGuitars = getFiltered(props.guitars, filter)
  const minPrice = getMinPrice( getFiltered(props.guitars, {
    ...filter,
    price: {
      max: String(Number.MAX_VALUE),
      min: String(Number.MIN_VALUE)
    }
  }), props.guitars)
  const maxPrice = getMaxPrice( getFiltered(props.guitars, {
    ...filter,
    price: {
      max: String(Number.MAX_VALUE),
      min: String(Number.MIN_VALUE)
    }
  }), props.guitars)  
  const pages = Math.ceil(filtredGuitars.length / GUITARS_ON_PAGE)
  return (
    <div className="catalog">
      <div className="catalog__container container">
        <div className="catalog__head">
          <h2>Каталог гитар</h2>
          <p>
            <NavLink className="button" to="/#" exact="false">
              Главная
            </NavLink> 
            <svg width="12" height="7">
              <use xlinkHref="#arrow" />
            </svg>
            Каталог
          </p>
        </div>
        <div className="catalog__body">
          <Filter 
            filter = {filter} 
            setFilter = {setFilter}
            maxPrice = {maxPrice} 
            minPrice = {minPrice}
          />
          <Guitars guitars={filtredGuitars} pages={pages} />
        </div>        
      </div>
    </div>

  )
}


Catalog.propTypes = {
  guitars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      reference:  PropTypes.string.isRequired,
      name:  PropTypes.string.isRequired,
      type:  PropTypes.string.isRequired,
      reviewsCount: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      stringsCount: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image:  PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired
    ).isRequired
  }
  
  const mapStateToProps = (state) => {
    return {
      guitars: state.APP.guitars,
    }
  }


export default connect(mapStateToProps)(Catalog)