import React from 'react';
import { connect } from 'react-redux';
import GuitarCatalog from '../guitar-catalog/guitar-catalog';
import Navigation from '../navigation/navigation';
import Sort from '../sort/sort';
import './guitars.scss'

const Guitars = (props) => {
  return (
    <div>
      <Sort />
      {props.guitars.map((guitar, index) => (
        <GuitarCatalog
          key={guitar.id + index}
          guitar={guitar}  
        />
      ))}
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