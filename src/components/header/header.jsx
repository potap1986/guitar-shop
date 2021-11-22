import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom'

const Header = () => {
  const headerNavLinks = [
    {
      name: "Каталог",
      to: "/",
      exact: "true"
    },
    {
      name: "Где купить?",
      to: "/near",
      exact: "false"
    },
    {
      name: "О компании",
      to: "/about",
      exact: "false"
    },
    {
      name: "Сервис-центры",
      to: "/servis",
      exact: "false"
    }
  ]

  const headerInfoLinks = [
    {
      name: "Магазины",
      svg: "location",
      to: "/location",
      exact: "false"
    },
    {
      name: "Поиск",
      svg: "search",
      to: "/search",
      exact: "false"
    },
    {
      name: "Корзина",
      svg: "bag",
      quantity: 0,
      to: "/bag",
      exact: "false"
    }
  ]
  

  return (
    <header className="header">
      <div className="header__filling">
        <div className="header__container container">
          <a href="guitar-shop.com" className="header__logo">
            <svg width="67" height="70">
              <use xlinkHref="#logo" />
            </svg>
          </a>
          <nav className="header__nav">
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
        <img src="../img/image_header.png" alt="Гитара" />
      </div>
    </header>
  );
};


export default Header