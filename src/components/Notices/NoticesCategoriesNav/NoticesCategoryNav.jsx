import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../../redux/Auth/selectors';
import { useParams } from 'react-router-dom';

import {
  ButtonElement,
  ButtonList,
  FilterButton,
} from './NoticeCategoryNav.styled';

export const filterButtons = [
  { title: 'lost/found', to: 'lost_found', isAuth: false },
  { title: 'in good hands', to: 'in_good_hands', isAuth: false },
  { title: 'sell', to: 'sell', isAuth: false },
  { title: 'favorite ads', to: 'favorite', isAuth: true },
  { title: 'my ads', to: 'own', isAuth: true },
];

export const NoticesCategoryNav = () => {
  const IsAuth = useSelector(getIsLoggedIn);
  const { route } = useParams();

  return (
    <div>
      <ButtonList>
        {!IsAuth
          ? filterButtons
              .filter(itemBtn => itemBtn.isAuth === false)
              .map(filteredItem => (
                <ButtonElement key={filteredItem.title}>
                  <FilterButton
                    to={`/notices/` + filteredItem.to}
                    className={route === filteredItem.to ? 'active' : ' '}
                  >
                    {filteredItem.title}
                  </FilterButton>
                </ButtonElement>
              ))
          : filterButtons.map(({ title, to }) => (
              <ButtonElement key={title}>
                <FilterButton
                  to={`/notices/` + to}
                  className={route === to ? 'active' : ' '}
                >
                  {title}
                </FilterButton>
              </ButtonElement>
            ))}
      </ButtonList>
    </div>
  );
};
