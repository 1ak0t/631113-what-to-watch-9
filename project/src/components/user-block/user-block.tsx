import {Link, useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus, getUserData} from '../../store/selectors';
import {MouseEvent} from 'react';
import {logoutAction} from '../../store/api-actions';

function UserBlock () {
  const userData = useAppSelector(getUserData);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLoginClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    navigate(AppRoute.SignIn);
  };

  const handleLogoutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
    navigate(AppRoute.Main);
  };

  if (userData !== null && authorizationStatus === 'AUTH') {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to={AppRoute.MyList}>
            <div className="user-block__avatar">
              <img src={userData.avatarUrl} alt="User avatar" width="63" height="63"/>
            </div>
          </Link>
        </li>
        <li className="user-block__item">
          <a className="user-block__link" onClick={handleLogoutClick}>Sign out</a>
        </li>
      </ul>
    );
  } else {
    return (
      <div className="user-block">
        <a href="sign-in.html" className="user-block__link" onClick={handleLoginClick}>Sign in</a>
      </div>
    );
  }
}

export default UserBlock;
