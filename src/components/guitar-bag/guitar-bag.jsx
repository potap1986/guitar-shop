import React from 'react';
import './guitar-bag.scss'

const GuitarBag = ({guitar}) => {
  return (
    <div>
      <button aria-label="Удалить">
        <svg width="12" height="12">
          <use xlinkHref="#close" />
        </svg>
      </button>
      <img src={guitar.image} alt={guitar.name} />
      <div>
        <h3>{guitar.type} {guitar.name}</h3>
        <p>Артикул: {guitar.reference}</p>
        <p>{guitar.type}, {guitar.stringsCount} струнная</p>
      </div>
      <div>{guitar.price}  ₽</div>
      <div>
        <button>+</button>
        <span>1</span>
        <button>-</button>
      </div>
      <div>{guitar.price}  ₽</div>
    </div>
  )
}

export default GuitarBag