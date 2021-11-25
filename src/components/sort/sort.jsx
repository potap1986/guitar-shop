import React from 'react';
import { connect } from 'react-redux';
import './sort.scss'
import ActionCreator from '../../store/actions'
import { Sorting, SortType } from '../../const';
import { element } from 'prop-types';

const Sort = (props) => {
  const onSortHandler = (evt) => {
    const buttonSortType = evt.target.closest(".sort__type")
    // evt.preventDefault()    
    // props.onSetSort(evt.target.id)
    console.log(buttonSortType)
  }
  const onSortTypeHandler = (evt) => {    
    const buttonSortType = evt.target.closest(".sort__button")
    // evt.preventDefault()    
    // props.onSetSortType(evt.target.id)
    console.log(evt.target, buttonSortType)
  }

  return (
    <div className="sort">
      <h2 className="sort__title">Сортировать:</h2>
      <button onClick={onSortTypeHandler} id="price" className="sort__type">по цене</button>
      <button onClick={onSortTypeHandler} id="popular" className="sort__type">по популярности</button>
      <div className="sort__buttons">
        <button onClick={onSortHandler} className="sort__button sort__button--to-more" id="toMore" aria-label="От меньшего к большему">
          <svg width="14" height="11">
            <use xlinkHref="#triangle" />
          </svg>
        </button>
        <button  onClick={onSortHandler} className="sort__button sort__button--to-small" id="toSmall" aria-label="От большего к меньшему">
          <svg width="14" height="11">
            <use xlinkHref="#triangle" />
          </svg>
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
    sortType: state.sortType,
    activeSorting: state.activeSorting,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetSort: (sort) => {
    dispatch(ActionCreator.setSort(sort))
  },
  onSetSortType: (sortType) => {
    dispatch(ActionCreator.setSortType(sortType))
  },
})

export default connect(mapDispatchToProps, mapStateToProps)(Sort)