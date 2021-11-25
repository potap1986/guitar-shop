import React from 'react';
import { connect } from 'react-redux';
import GuitarCatalog from '../guitar-catalog/guitar-catalog';
import Navigation from '../navigation/navigation';
import Sort from '../sort/sort';
import './guitars.scss'

const Guitars = (props) => {
  return (
    <div className="guitars">
      <Sort />
      <div className="guitars__catalog">
        {props.guitars.map((guitar, index) => (
          <GuitarCatalog
            key={guitar.id + index}
            guitar={guitar}  
          />
        ))}
      </div>
      <Navigation />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    guitars: state.guitars
  }
}

export default connect(mapStateToProps)(Guitars)