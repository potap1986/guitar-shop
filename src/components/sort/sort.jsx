import React from 'react';
import './sort.scss'

const Sort = () => {
  return (
    <div>
      <h2>Сортировать:</h2>
      <button>по цене</button>
      <button>по популярности</button>
      <div>
        <button aria-label="От меньшего к большему">
          <svg width="14" height="11">
            <use xlinkHref="#triangle" />
          </svg>
        </button>
        <button aria-label="От большего к меньшему">
          <svg width="14" height="11">
            <use xlinkHref="#triangle" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Sort