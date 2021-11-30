import {Sorting, StringsCount, GuitarType, Number} from './const'

const formatedNumber = (num) => {
  let number = String(Math.round(num));
  let result = ""
  const gapSize = 3

  while (number.length > 0) 
  {
    result =  number.slice(-gapSize) + " " + result;
    number = number.slice(0, -gapSize)
  }

  return result
}

const deletedItemBag = (state, action) => {
	const existingCartGuitarIndex = state.bag.guitars.findIndex(
		(guitar) => guitar.id === action.id
	);
	const existingGuitar = state.bag.guitars[existingCartGuitarIndex];
	const updatedTotalAmount = state.bag.totalAmount - existingGuitar.price * existingGuitar.amount;
	let updatedGuitars;
	updatedGuitars = state.bag.guitars.filter(guitar => guitar.id !== action.id);

	return {
		guitars: updatedGuitars,
		totalAmount: updatedTotalAmount,
	};
}


const addedBag = (state, action) => {
  const updatedTotalAmount =
    state.bag.totalAmount + action.price;

  const existingCartGuitarIndex = state.bag.guitars.findIndex(
    (guitar) => guitar.id === action.id
  );
  const existingCartGuitar = state.bag.guitars[existingCartGuitarIndex];
  let updatedGuitars;

  if (existingCartGuitar) {
    const updatedGuitar = {
      ...existingCartGuitar,
      amount: existingCartGuitar.amount + 1,
    };
    updatedGuitars = [...state.bag.guitars];
    updatedGuitars[existingCartGuitarIndex] = updatedGuitar;
  } else {
    updatedGuitars = state.bag.guitars.concat(action);
  }

  return {
    guitars: updatedGuitars,
    totalAmount: updatedTotalAmount,
  };
};

const deletedBag = (state, action) => {
  const existingCartGuitarIndex = state.bag.guitars.findIndex(
    (guitar) => guitar.id === action.id
  );
  const existingGuitar = state.bag.guitars[existingCartGuitarIndex];
  const updatedTotalAmount = state.bag.totalAmount - existingGuitar.price;
  let updatedGuitars;
  if (existingGuitar.amount === 1) {
    updatedGuitars = state.bag.guitars.filter(guitar => guitar.id !== action.id);
  } else {
    const updatedGuitar = { ...existingGuitar, amount: existingGuitar.amount - 1 };
    updatedGuitars = [...state.bag.guitars];
    updatedGuitars[existingCartGuitarIndex] = updatedGuitar;
  }

  return {
    guitars: updatedGuitars,
    totalAmount: updatedTotalAmount,
  };
}

const getSorting = (guitars, sortType, sort, active) => {
  if (active) {
    switch (sort) {
      case Sorting.TO_MORE:
        return guitars.slice().sort((a, b) => a[sortType] - b[sortType]);
      case Sorting.TO_SMALL:
        return guitars.slice().sort((a, b) => b[sortType] - a[sortType]);
      default:
        return guitars.slice();
    }
  } else {
    return guitars.slice()
  }
};

const getFiltered = (guitars, filter) => {
  let filteredGuitars = []
  const types = Object.keys(filter.type)
  const typesOn = Object.values(filter.type)
  const strings = Object.keys(filter.string)
  const stringsOn = Object.values(filter.string)

  if (filter.on) {
    guitars.forEach((guitar) => {
      if (((guitar.price >= (filter.price.min)) || (filter.price.min === "")) && ((guitar.price <= filter.price.max) || (filter.price.max === ""))) {
        if (((guitar.type === GuitarType[types[0].toUpperCase()]) && typesOn[0]) || 
            ((guitar.type === GuitarType[types[1].toUpperCase()]) && typesOn[1]) ||
            ((guitar.type === GuitarType[types[2].toUpperCase()]) && typesOn[2]) ||
            ( !typesOn[0] && !typesOn[1] && !typesOn[2])
        ) {
          if (((guitar.stringsCount === StringsCount[strings[0].toUpperCase()]) && stringsOn[0]) || 
              ((guitar.stringsCount === StringsCount[strings[1].toUpperCase()]) && stringsOn[1]) ||
              ((guitar.stringsCount === StringsCount[strings[2].toUpperCase()]) && stringsOn[2]) ||
              ((guitar.stringsCount === StringsCount[strings[3].toUpperCase()]) && stringsOn[3]) ||
              ( !stringsOn[0] && !stringsOn[1] && !stringsOn[2] && !stringsOn[3])
          ) {
  
            filteredGuitars.push(guitar)
          }
        }
      }
    })
  } else {
    filteredGuitars = filteredGuitars.concat(guitars)
  }
  return filteredGuitars
}

const getMinPrice = (filteredGuitars, dataGuitars) => {
  const guitars = (filteredGuitars.length !== 0 ? filteredGuitars : dataGuitars)
  return guitars.reduce((a, b) => a < b.price ? a : b.price , Number.MAX_VALUE);
}

const getMaxPrice = (filteredGuitars, dataGuitars) => {
  const guitars = (filteredGuitars.length !== 0 ? filteredGuitars : dataGuitars)
  return guitars.reduce((a, b) => a > b.price ? a : b.price , Number.MIN_VALUE);
}



export {formatedNumber, deletedItemBag, addedBag, deletedBag, getSorting, getMaxPrice, getMinPrice, getFiltered}