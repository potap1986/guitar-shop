import {ActionType, Sorting, SortType, Page} from "../const";
import {guitars} from '../data'
import {deletedItemBag, addedBag, deletedBag} from '../utils'
const initialState = {
	activePage: Page.ONE,
	guitars: guitars,
	isPopupAddVisible: false,
	isPopupDeleteVisible: false,
	isPopupInfoVisible: false,
	activeGuitar: null,
	sort: Sorting.TO_MORE,
	sortType: SortType.PRICE,
	activeSorting: false,
	bag: {
		guitars: [],
		totalAmount: 0,
	},  
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.OPEN_POPUP_ADD:
			return {
				...state,
				isPopupAddVisible: action.payload
			};
		case ActionType.CLOSE_POPUP_ADD:
			return {
				...state,
				isPopupAddVisible: action.payload
			};
		case ActionType.OPEN_POPUP_DELETE:
			return {
				...state,
				isPopupDeleteVisible: action.payload
			};
		case ActionType.CLOSE_POPUP_DELETE:
			return {
				...state,
				isPopupDeleteVisible: action.payload
			};
		case ActionType.OPEN_POPUP_INFO:
			return {
				...state,
				isPopupInfoVisible: action.payload
			};
		case ActionType.CLOSE_POPUP_INFO:
			return {
				...state,
				isPopupInfoVisible: action.payload
			};
		case ActionType.SET_ACTIVE_GUITAR:
			return {
				...state,
				activeGuitar: action.payload
			};
		case ActionType.SET_ACTIVE_PAGE:
			return {
				...state,
				activePage: action.payload
			};
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
		case ActionType.RESET_SORT_TYPE:
			return {
				...state,
				sortType: SortType.PRICE,
				activeSorting: false
			};
		case ActionType.SET_SORT_TYPE:
			return {
				...state,
				sortType: action.payload,
				activeSorting: true
			};
		case ActionType.RESET_SORT:
			return {
				...state,
				sort: Sorting.TO_MORE,
				activeSorting: false
			};
		case ActionType.SET_SORT:
			return {
				...state,
				sort: action.payload,
				activeSorting: true
			};
		default:
			return state;
	}
}

export default reducer;