

import {
  ButtonElement,
  ButtonList,
  FilterButton,
} from './NoticeCategoryNav.styled';

export const filterButtons = [
  { title: 'lost/found', to: 'lost_found' },
  { title: 'in good hands', to: 'for-free' },
  { title: 'sell', to: 'sell' },
  { title: 'favorite ads', to: 'favorite' },
  { title: 'my ads', to: 'own' },
];

export const NoticesCategoryNav = () =>
  {

    return (
      <div
      >
        <ButtonList>
          {filterButtons.map(({ title, to }) => (
            <ButtonElement key={title}>
              <FilterButton to={to}>{title}</FilterButton>
            </ButtonElement>
          ))}
        </ButtonList>

      </div>

    );
  };
