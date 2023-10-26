import { useState } from 'react';
import { Sort } from '../../const/const';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortType } from '../../store/action';

function Sorting(): JSX.Element {
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();


  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setIsSortOpen(!isSortOpen)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={classNames(
        'places__options',
        'places__options--custom',
        { 'places__options--opened': isSortOpen })}
      >
        {Object.entries(Sort).map(([key, value]) => (
          <li
            key={key}
            className={sortType === key ? 'places__option places__option--active' : 'places__option'}
            tabIndex={0}
            onClick={() => {
              setIsSortOpen(!isSortOpen);
              dispatch(changeSortType({ newSortType: value }));
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
