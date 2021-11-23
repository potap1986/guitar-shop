
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

const MAX_RATE = 5

export {ActionType, GuitarType, StringsCount, MAX_RATE}