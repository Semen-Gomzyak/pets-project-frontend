import { useParams } from 'react-router-dom';
import { NaviList, NaviLink } from './Nav.styled';

export const Nav = () => {
  const { categoryName } = useParams();
  // console.log(' Nav route', categoryName);
  return (
    <nav>
      <NaviList>
        <li>
          <NaviLink to="/news">News</NaviLink>
        </li>
        <li>
          <NaviLink to="/notices/sell">Find pet</NaviLink>
        </li>
        <li>
          <NaviLink to="/friends">Our friends</NaviLink>
        </li>
      </NaviList>
    </nav>
  );
};
