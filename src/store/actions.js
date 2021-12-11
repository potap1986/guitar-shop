import {ActionType} from "../const";

const ActionCreator = {
	openPopupAdd: () => ({
		type: ActionType.OPEN_POPUP_ADD,
	}),

	closePopupAdd: () => ({
		type: ActionType.CLOSE_POPUP_ADD,
	}),

	openPopupDelete: () => ({
		type: ActionType.OPEN_POPUP_DELETE,
	}),

	closePopupDelete: () => ({
		type: ActionType.CLOSE_POPUP_DELETE,
	}),
	
	openPopupInfo: () => ({
		type: ActionType.OPEN_POPUP_INFO,
	}),

	closePopupInfo: () => ({
		type: ActionType.CLOSE_POPUP_INFO,
	}),
	
	setActiveGuitar: (activeGuitar) => ({
		type: ActionType.SET_ACTIVE_GUITAR,
		payload: activeGuitar
	}),
	
	setActivePage: (activePage) => ({
		type: ActionType.SET_ACTIVE_PAGE,
		payload: activePage
	}),

	addBag: (guitar) => ({
		type: ActionType.ADD_BAG,
		payload: guitar
	}),

	deleteBag: (guitar) => ({
		type: ActionType.DELETE_BAG,
		payload: guitar
	}),

	changeAmount: (guitar, amount) => ({
		type: ActionType.CHANGE_AMOUNT,
		payload: {guitar, amount}
	}),

	deleteItemBag: (guitar) => ({
		type: ActionType.DELETE_ITEM_BAG,
		payload: guitar
	}),

	setSort: (sort) => ({
		type: ActionType.SET_SORT,
		payload: sort
	}),

	setSortType: (sortType) => ({
		type: ActionType.SET_SORT_TYPE,
		payload: sortType
	}),

};

export default ActionCreator;
