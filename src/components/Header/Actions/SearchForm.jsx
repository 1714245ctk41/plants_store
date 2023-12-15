import { useRef, useState } from 'react';
import Search from '../../common/Icons/Search';

const SearchForm = () => {
  const [textSearch, setTextSearch] = useState('');
  const closeEl = useRef(0);

  const inputChangeHandle = (e) => {
    setTextSearch(e.target.value);
  };

  const cleanTextSearch = () => {
    setTextSearch('');
  };
  return (
    <div className='header-search-wrap flex align-center justify-center'>
      <form action='' className='flex position-relative'>
        <input
          value={textSearch}
          onChange={inputChangeHandle}
          type='text'
          className='border-input border-radius-l input-search-header'
          style={{ borderRight: '0' }}
          placeholder="I'm shopping for ..."
        />
        <div
          ref={closeEl}
          onClick={cleanTextSearch}
          className={`close close-search-header transition pointer ${
            !textSearch ? 'close-disable' : 'close-open'
          }`}
        ></div>
        <button
          className='background-green border-radius-r button-submit button-search-header pointer'
          type='submit'
        >
          SEARCH
          <Search />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
