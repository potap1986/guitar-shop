import {combineReducers} from "redux";
import bag from './bag/bag';
import app from './app/app';

export const NameSpace = {
  BAG: `BAG`,
  APP: `APP`,
};

export default combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.BAG]: bag,
});
