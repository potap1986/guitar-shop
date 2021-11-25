
const ActionType = {
  OPEN_POPUP_INFO: 'openPopupInfo',
  CLOSE_POPUP_INFO: 'closePopupInfo',
  OPEN_POPUP_ADD: 'openPopupAdd',
  CLOSE_POPUP_ADD: 'closePopupAdd',
  OPEN_POPUP_DELETE: 'openPopupDelete',
  CLOSE_POPUP_DELETE: 'closePopupDelete',
  SET_ACTIVE_GUITAR: 'setActiveGuitar',
  ADD_BAG: 'addBag',
  DELETE_BAG: 'deleteBag',
  DELETE_ITEM_BAG: 'deleteItemBag',
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  RESET_SORT_TYPE: `RESET_SORT_TYPE`,
  SET_SORT: `SET_SORT`,
  RESET_SORT: `RESET_SORT`,
}

const GuitarType = {
  ELECTRO: 'Электрогитара',
  UKULELE: 'Укулеле',
  ACOUSTIC: 'Акустическая гитара',
}

const StringsCount = {
  FOUR: 4,
  SIX: 6,
  SEVEN: 7,
  TWELVE: 12,
}

const Promo = {
  GITARAHIT: 'GITARAHIT',
  SUPERGITARA : 'SUPERGITARA',
  GITARA2020: 'GITARA2020',
}

const MAX_RATE = 5

const SortType = {
  PRICE: "price",
  POPULAR: "popular"
}

const Sorting = {
  TO_SMALL: "toSmall",
  TO_MORE: "toMore"
}

export {ActionType, GuitarType, StringsCount, MAX_RATE, Promo, Sorting, SortType}