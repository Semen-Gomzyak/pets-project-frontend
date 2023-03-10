import { useState } from 'react';
import {
  InputSearch,
  LabelSearch,
  RemoveBtn,
  CiCircleDel,
} from './SearchInput.styled';
import { CiSearch } from 'react-icons/ci';

export const SearchInput = ({ functionSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchHandler = e => {
    setSearchQuery(e.target.value);
    functionSearch(e.target.value);
  };

  const removeQuery = () => {
    setSearchQuery('');
    functionSearch('');
  };

  return (
    <LabelSearch>
      <InputSearch
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={searchHandler}
      />
      {!searchQuery && <CiSearch />}

      {searchQuery && (
        <RemoveBtn type="button" onClick={removeQuery}>
          <CiCircleDel />
        </RemoveBtn>
      )}
    </LabelSearch>
  );
};
