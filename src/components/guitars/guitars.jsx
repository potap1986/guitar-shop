import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GuitarCatalog from '../guitar-catalog/guitar-catalog';
import {getSorting} from '../../utils'
import {GUITARS_ON_PAGE, Page} from '../../const'
import Navigation from '../navigation/navigation';
import Sort from '../sort/sort';
import './guitars.scss'
import PropTypes from "prop-types";
import ActionCreator from '../../store/actions'

const Guitars = (props) => {
  const sortedGuitars = getSorting(props.guitars, props.sortType, props.sort, props.activeSorting)

  useEffect(() => {
    if (props.activePage > props.pages) {
      props.onSetPage(Page.ONE)
    }
  }, [props])

  return (
    <div className="guitars">
      <Sort />
      <div className="guitars__catalog">
        {sortedGuitars.slice((props.activePage - 1) * GUITARS_ON_PAGE, props.activePage * GUITARS_ON_PAGE).map((guitar, index) => (
          <GuitarCatalog
            key={guitar.id + index + guitar.reference}
            guitar={guitar}  
          />
        ))}
      </div>
      <Navigation guitars = {props.guitars} />
    </div>
  )
}

Guitars.propTypes = {
  pages: PropTypes.number.isRequired,
  onSetPage: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  activeSorting: PropTypes.bool.isRequired,
  sort: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
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
    }).isRequired,
  ).isRequired,
}

const mapStateToProps = (state) => {
  return {
    activePage: state.APP.activePage,
    activeSorting: state.APP.activeSorting,
    sort: state.APP.sort,
    sortType: state.APP.sortType,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetPage: (page) => {
    dispatch(ActionCreator.setActivePage(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Guitars)