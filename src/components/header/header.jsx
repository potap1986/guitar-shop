import React, { useEffect, useState } from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const Header = (props) => {
  const headerNavLinks = [
    {
      name: "Каталог",
      to: "/",
      exact: "true"
    },
    {
      name: "Где купить?",
      to: "/#",
      exact: "false"
    },
    {
      name: "О компании",
      to: "/#",
      exact: "false"
    },
    {
      name: "Сервис-центры",
      to: "/#",
      exact: "false"
    }
  ]

  
  const [bagQuantity, setBagQuantity] = useState(0)

  const countAmount = (bag) => {
    let sum = 0
    if (bag.guitars.length > 0) {
      bag.guitars.forEach((guitar) => {
        sum = sum + guitar.amount
      });
    }
    return sum
  }

  useEffect(() => {setBagQuantity(countAmount(props.bag))}, [props.bag])

  const headerInfoLinks = [
    {
      name: "Магазины",
      svg: "location",
      to: "/#",
      exact: "false"
    },
    {
      name: "Поиск",
      svg: "search",
      to: "/#",
      exact: "false"
    },
    {
      name: "Корзина",
      svg: "bag",
      quantity: bagQuantity,
      to: "/bag",
      exact: "false"
    }
  ]

  
  const mediaQueryMobile = window.matchMedia('(max-width: 320px)')
  const [visibleMenu, setMenuVisible] = useState(true)
  const handleWindowSizeChangeMobile = () => {
    if (!mediaQueryMobile.matches) {
      setMenuVisible(false)
    }
  };

  useEffect(() => {
    mediaQueryMobile.addListener(handleWindowSizeChangeMobile);
    return () => {
      mediaQueryMobile.removeListener(handleWindowSizeChangeMobile);
    };
  });


  return (
    <header className="header">
      <div className="header__filling">
        <div className="header__container container">
          <button type="button"  className="header__menu" onClick={() => setMenuVisible(true)}>
            <svg  width="14" height="9">
              <use xlinkHref="#menu" />
            </svg>
          </button> 
          <a href="/" className="header__logo">
            <svg width="67" height="70">
              <use xlinkHref="#logo" />
            </svg>
          </a>
          <div className={"header__nav-wrapper" + (visibleMenu ? " header__nav-wrapper--open": "")}>
            <nav className="header__nav">
              <button type="button" 
                className="header__close-menu" 
                onClick={() => setMenuVisible(false)} 
                aria-label="Закрыть окно"
              >
                <svg width="12" height="12">
                  <use xlinkHref="#close-menu" />
                </svg>
              </button>
              <ul className="header__nav-list">
                {headerNavLinks.map((link, index) => (
                  <li
                    key={link.name + index}
                    className="header__nav-item"
                  >
                    <NavLink to={link.to} exact={link.exact} className="header__nav-link">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <nav className="header__info">
            <ul className="header__info-list">
              {headerInfoLinks.map((link, index) => (
                <li
                  key={link.name + index}
                  className="header__info-item"
                >
                  <NavLink to={link.to} exact={link.exact} className="header__info-link">
                    <svg width="14" height="14">
                      <use xlinkHref={"#" + link.svg} />
                    </svg>
                    <span className="visually-hidden">{link.name}</span>
                    {link.quantity > 0 ?
                      <span className="header__info-quantity">
                        {link.quantity}
                      </span>
                      : <></>
                    }
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__background">
        <picture>
          <source media="(max-width: 320px)" srcSet="../img/image_header-mobile.png" />
          <source media="(max-width: 768px)" srcSet="../img/image_header-tablet.png" />
          <img src="../img/image_header.png" alt="Гитара"  />
        </picture>  
      </div>
    </header>
  );
};

Header.propTypes = {	
  bag: PropTypes.shape({
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
      })
    ).isRequired,
    totalAmount: PropTypes.number.isRequired,
  }).isRequired
}

const mapStateToProps = (state) => {
  return {
    bag: state.BAG.bag
  }
}

export default connect(mapStateToProps)(Header)