// import { useState } from 'react';
// import { useDispatch /*, useSelector */ } from 'react-redux';
import { SearchInput } from '../../SearchInput/SearchInput';

import {
  // ButtonContainer,
  Input,
  Label,
  // SearchButton,
} from './NoticesSearch.styled';

export const NoticesSearch = ({ onSearch, ...allProps }) => {
  return (
    <Label>
      <Input onChange={onSearch} {...allProps} />
    </Label>
  );
};
