import {ActionType} from "../../const";
import {deletedItemBag, addedBag, deletedBag} from '../../utils'
const initialState = {
	bag: {
		guitars: [],
		totalAmount: 0,
	},  
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.DELETE_ITEM_BAG: 
			return {
				...state,
				bag: deletedItemBag(state, action.payload)
			};
		case ActionType.ADD_BAG:
				return {
					...state,
					bag: addedBag(state, action.payload)
			};
		case ActionType.DELETE_BAG: 
			return {
				...state,
				bag: deletedBag(state, action.payload)
		  };
		default:
			return state;
	}
}

export default reducer;