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


export {formatedNumber, deletedItemBag, addedBag, deletedBag}