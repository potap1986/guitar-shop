import React from 'react';
import './sort.scss'

const Sort = () => {
  return (
    <div className="sort">
      <h2 className="sort__title">Сортировать:</h2>
      <button className="sort__type">по цене</button>
      <button className="sort__type">по популярности</button>
      <div className="sort__buttons">
        <button className="sort__button sort__button--to-more" aria-label="От меньшего к большему">
          <svg width="14" height="11">
            <use xlinkHref="#triangle" />
          </svg>
        </button>
        <button className="sort__button sort__button--to-small" aria-label="От большего к меньшему">
          <svg width="14" height="11">
            <use xlinkHref="#triangle" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Sort