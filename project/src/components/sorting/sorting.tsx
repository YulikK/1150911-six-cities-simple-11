import { useState } from 'react';
import { Sort } from '../../const/const';

function Sorting():JSX.Element {
  const [activeSort, setActiveSort] = useState(Sort.POPULAR);
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

  return(
    <form className="places__sorting" action="#" method="get" onClick={()=>setIsSortOpen(!isSortOpen)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpen ? 'places__options--opened' : ''}`}>
        {Object.entries(Sort).map(([key,value]) => (
          <li
            key={key}
            className={activeSort === key ? 'places__option places__option--active' : 'places__option'}
            tabIndex={0}
            onClick={() => {
              setIsSortOpen(!isSortOpen);
              setActiveSort(value);
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
