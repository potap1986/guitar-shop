import React from 'react';
import './navigation.scss'

const Navigation = () => {
  return (
    <div className="navigation">
      <button className="navigation__button navigation__button--active">1</button>
      <button className="navigation__button">2</button>
      <button className="navigation__button">...</button>
      <button className="navigation__button">7</button>
      <button className="navigation__button">Далее</button>
    </div>
  )
}

export default Navigation