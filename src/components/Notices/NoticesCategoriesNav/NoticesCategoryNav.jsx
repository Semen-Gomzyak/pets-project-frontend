import { useSelector } from 'react-redux';
import { selectToken } from '../../../redux/Auth/selectors';
import { useParams } from 'react-router-dom';

import {
  ButtonElement,
  ButtonList,
  FilterButton,
} from './NoticeCategoryNav.styled';

export const filterButtons = [
  { title: 'lost/found', to: 'lost_found', isAuth: false },
  { title: 'in good hands', to: 'for-free', isAuth: false },
  { title: 'sell', to: 'sell', isAuth: false },
  { title: 'favorite ads', to: 'favorite', isAuth: true },
  { title: 'my ads', to: 'own', isAuth: true },
];

export const NoticesCategoryNav = () => {
  const tokenIsAuth = useSelector(selectToken);
  const { route } = useParams();
  // console.log('tokenIsAuth ', tokenIsAuth);

  return (
    <div>
      <ButtonList>
        {!tokenIsAuth
          ? filterButtons
              .filter(itemBtn => itemBtn.isAuth === true)
              .map(filteredItem => (
                <ButtonElement key={filteredItem.title}>
                  <FilterButton
                    to={filteredItem.to}
                    className={
                      route === 'sell' ||
                      route === 'lost_found' ||
                      route === 'for_free' ||
                      route === 'favorite' ||
                      route === 'own'
                        ? 'active'
                        : ''
                    }
                  >
                    {filteredItem.title}
                  </FilterButton>
                </ButtonElement>
              ))
          : filterButtons.map(({ title, to }) => (
              <ButtonElement key={title}>
                <FilterButton to={to}>{title}</FilterButton>
              </ButtonElement>
            ))}
      </ButtonList>
    </div>
  );
};
