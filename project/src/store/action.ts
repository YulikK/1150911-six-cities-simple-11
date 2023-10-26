import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types/Offer';
import { Sort } from '../const/const';

export const changeLocation = createAction<{ newLocation: CityType }>('offer/changeLocation');
export const changeSortType = createAction<{ newSortType: Sort }>('offer/changeSortType');
