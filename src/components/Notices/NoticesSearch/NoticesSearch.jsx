// import { useState } from 'react';
// import { useDispatch /*, useSelector */ } from 'react-redux';
import { SearchInput } from '../../SearchInput/SearchInput';

import {
  // ButtonContainer,
  // Input,
  Label,
  // SearchButton,
} from './NoticesSearch.styled';

export const NoticesSearch = () => {
  // const [searchValue, setSearchValue] = useState();
  // const dispatch = useDispatch();

  // const onSearch = () => {
  //   // console.log(searchValue);
  //   console.log(searchValue);
  // };

  // const onPressEnter = e => {
  //   if (e.key === 'Enter') {
  //     onSearch();
  //   }
  //   return;
  // };

  return (
    <Label>
      <SearchInput />
    </Label>
  );
};
