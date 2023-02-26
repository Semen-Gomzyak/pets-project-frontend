import { useSelector } from 'react-redux';
import {
    getUser,
    getIsLoggedIn,
    getIsRefreshing,
} from 'redux/Auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isRefreshing = useSelector(getIsRefreshing);
    const user = useSelector(getUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};