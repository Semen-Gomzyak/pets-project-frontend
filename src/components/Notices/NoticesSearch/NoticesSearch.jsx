import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ButtonContainer,
  Input,
  Label,
  SearchButton,
} from './NoticesSearch.styled';

export const NoticesSearch = () => {
  const [searchValue, setSearchValue] = useState();
  const dispatch = useDispatch();

  const onSearch = () => {
console.log(searchValue);
  };

  
    const onPressEnter = e => {
      if (e.key === 'Enter') {
        onSearch();
      }
      return;
    }; 

  return (
    <Label>
      <Input
        placeholder="Search"
        onChange={e => setSearchValue(e.target.value)}

        onKeyDown={onPressEnter}
      />
      <ButtonContainer>
        <SearchButton
          type="button"
          onClick={onSearch}
        >
        </SearchButton>
      </ButtonContainer>
    </Label>
  );
};
