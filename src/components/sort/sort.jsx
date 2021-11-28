import React from 'react';
import { connect } from 'react-redux';
import './sort.scss'
import ActionCreator from '../../store/actions'
import {SortType, Sorting} from '../../const'
import PropTypes from "prop-types";

const Sort = (props) => {
  const onSortHandler = (evt) => {
    evt.preventDefault()   
    const buttonSort = evt.target.closest(".sort__button") 
    props.onSetSort(buttonSort.id)
  }
  const onSortTypeHandler = (evt) => { 
    evt.preventDefault()     
    const buttonSortType = evt.target.closest(".sort__type")  
    props.onSetSortType(buttonSortType.id)
  }

  return (
    <div className="sort">
      <h2 className="sort__title">Сортировать:</h2>
      <button onClick={onSortTypeHandler} id="price" className={"sort__type button" + (props.activeSorting && props.sortType === SortType.PRICE ? " sort__type--active" : "")}>по цене</button>
      <button onClick={onSortTypeHandler} id="reviewsCount" className={"sort__type button" + (props.activeSorting && props.sortType === SortType.REVIEWS_COUNT ? " sort__type--active" : "")}>по популярности</button>
      <div className="sort__buttons">
        <button onClick={onSortHandler} className={"sort__button sort__button--to-more button" + (props.activeSorting && props.sort === Sorting.TO_MORE ? " sort__button--active" : "")} id="toMore" aria-label="От меньшего к большему">
          <svg width="14" height="11">
            <use xlinkHref="#triangle" />
          </svg>
        </button>
        <button  onClick={onSortHandler} className={"sort__button sort__button--to-small button" + (props.activeSorting && props.sort === Sorting.TO_SMALL ? " sort__button--active" : "")} id="toSmall" aria-label="От большего к меньшему">
          <svg width="14" height="11">
            <use xlinkHref="#triangle" />
          </svg>
        </button>
      </div>
    </div>
  )
}

Sort.propTypes = {
  sort: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  activeSorting: PropTypes.bool.isRequired,
  onSetSortType: PropTypes.func.isRequired,
  onSetSort: PropTypes.func.isRequired,
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
    dispatch(ActionCreator.setSort(sort));
  },
  onSetSortType: (sortType) => {
    dispatch(ActionCreator.setSortType(sortType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort)