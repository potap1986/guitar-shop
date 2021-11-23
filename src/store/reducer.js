import {ActionType} from "../const";
import {guitars} from '../data'

const initialState = {
	guitars: guitars,
	isPopupAddVisible: false,
	isPopupDeleteVisible: false,
	isPopupInfoVisible: false,
	activeGuitar: null,
	bag: []
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
		case ActionType.ADD_BAG:
			return {
				...state,
				bag: [action.payload, ...state.bag]
			};
		case ActionType.DELETE_BAG:
			return {
				...state,
				bag: state.bag.delete(action.payload)
			}
		default:
			return state;
	}
}

export default reducer;