
const ActionType = {
  OPEN_POPUP_INFO: 'openPopupInfo',
  CLOSE_POPUP_INFO: 'closePopupInfo',
  OPEN_POPUP_ADD: 'openPopupAdd',
  CLOSE_POPUP_ADD: 'closePopupAdd',
  OPEN_POPUP_DELETE: 'openPopupDelete',
  CLOSE_POPUP_DELETE: 'closePopupDelete',
  SET_ACTIVE_GUITAR: 'setActiveGuitar',
  SET_ACTIVE_PAGE: 'setActivePage',
  ADD_BAG: 'addBag',
  DELETE_BAG: 'deleteBag',
  DELETE_ITEM_BAG: 'deleteItemBag',
  SET_SORT_TYPE: `setSortType`,
  RESET_SORT_TYPE: `resetSortType`,
  SET_SORT: `setSort`,
  RESET_SORT: `resetSort`,
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
  REVIEWS_COUNT: "reviewsCount"
}

const Sorting = {
  TO_SMALL: "toSmall",
  TO_MORE: "toMore"
}

const GUITARS_ON_PAGE = 9

const Page = {
  ONE: 1,
  TWO: 2,
  THREE: 3
}

export {ActionType, GuitarType, StringsCount, MAX_RATE, Promo, Sorting, SortType, GUITARS_ON_PAGE, Page}