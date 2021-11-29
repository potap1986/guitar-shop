import React from 'react';
import { connect } from 'react-redux';
import './sort.scss'
import ActionCreator from '../../store/actions'
import {SortType, Sorting} from '../../const'
import PropTypes from "prop-types";

const Sort = (props) => {
  // можно было бы добавить id по месту вызова в jsx 
// кнопкам обязательно добавляй type="button", чтобы зоопарк дефолтного поведения не возникал и не нужно было evt.preventDefault везде указывать.
  return (
    <div className="sort">
      <h2 className="sort__title">Сортировать:</h2>
      <button type="button" onClick={()=>props.onSetSortType(SortType.PRICE)} id="price" className={"sort__type button" + (props.activeSorting && props.sortType === SortType.PRICE ? " sort__type--active" : "")}>по цене</button>
      <button type="button" onClick={()=>props.onSetSortType(SortType.REVIEWS_COUNT)} id="reviewsCount" className={"sort__type button" + (props.activeSorting && props.sortType === SortType.REVIEWS_COUNT ? " sort__type--active" : "")}>по популярности</button>
      <div className="sort__buttons">
        <button type="button" onClick={()=>props.onSetSort(Sorting.TO_MORE)} className={"sort__button sort__button--to-more button" + (props.activeSorting && props.sort === Sorting.TO_MORE ? " sort__button--active" : "")} id="toMore" aria-label="От меньшего к большему">
          <svg width="14" height="11">
            <use xlinkHref="#triangle" />
          </svg>
        </button>
        <button type="button" onClick={()=>props.onSetSort(Sorting.TO_SMALL)} className={"sort__button sort__button--to-small button" + (props.activeSorting && props.sort === Sorting.TO_SMALL ? " sort__button--active" : "")} id="toSmall" aria-label="От большего к меньшему">
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