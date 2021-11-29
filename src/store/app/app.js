import {ActionType, Sorting, SortType, Page} from "../../const";
import {guitars} from '../../data'
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
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.OPEN_POPUP_ADD:
			return {
				...state,
				isPopupAddVisible: true
			};
		case ActionType.CLOSE_POPUP_ADD:
			return {
				...state,
				isPopupAddVisible: false
			};
		case ActionType.OPEN_POPUP_DELETE:
			return {
				...state,
				isPopupDeleteVisible: true
			};
		case ActionType.CLOSE_POPUP_DELETE:
			return {
				...state,
				isPopupDeleteVisible: false
			};
		case ActionType.OPEN_POPUP_INFO:
			return {
				...state,
				isPopupInfoVisible: true
			};
		case ActionType.CLOSE_POPUP_INFO:
			return {
				...state,
				isPopupInfoVisible: false
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
		case ActionType.SET_SORT_TYPE:
			return {
				...state,
				sortType: action.payload,
				activeSorting: true
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