import { createReducer } from '@reduxjs/toolkit';
import { changeLocation, changeSortType } from './action';
import { DEFAULT_CITY, Sort } from '../const/const';
import { getCityOffers, getSortedOffers } from '../offers';

const initialState = {
  activeLocation: DEFAULT_CITY,
  cityOffers: getCityOffers(DEFAULT_CITY),
  sortType: Sort.POPULAR,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      const { newLocation } = action.payload;
      state.activeLocation = newLocation;
      state.cityOffers = getCityOffers(newLocation);
    })
    .addCase(changeSortType, (state, action) => {
      const { newSortType } = action.payload;
      state.sortType = newSortType;
      state.cityOffers = getSortedOffers(state.cityOffers, newSortType, state.activeLocation);
    });
});

export { reducer };
