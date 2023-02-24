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
  { title: 'in good hands', to: 'for_free', isAuth: false },
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
                    className={
                      route === 'sell' ||
                      route === 'lost_found' ||
                      route === 'for_free' ||
                      route === 'favorite' ||
                      route === 'own'
                        ? 'active'
                        : ' '
                    }
                  >
                    {filteredItem.title}
                  </FilterButton>
                </ButtonElement>
              ))
          : filterButtons.map(({ title, to }) => (
              <ButtonElement key={title}>
                <FilterButton to={`/notices/` + to}>{title}</FilterButton>
              </ButtonElement>
            ))}
      </ButtonList>
    </div>
  );
};
