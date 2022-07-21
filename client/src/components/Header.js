import React, { useState, useEffect } from 'react';
import { NavLink, Link, useHistory, useLocation } from 'react-router-dom';
import { SearchInput } from '../components';
import useAuth from '../hooks/useAuth';
import useLogout from '../hooks/useLogout';

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [showLoginButton, setShowLoginButton] = useState();
  const [showSearchInput, setShowSearchInput] = useState();
  const { auth } = useAuth();

  useEffect(() => {
    setShowLoginButton(!['/login', '/search'].includes(location.pathname));
    setShowSearchInput(['/search'].includes(location.pathname));
  }, [location]);

  const logout = useLogout();
  const signout = async () => {
    await logout();
  }

  return (
    <header className='header'>
      {showSearchInput ?
        <SearchInput />
        :
        <ul className='menu'>
          <li className='menu-item'>
            <NavLink exact to='/' activeClassName='active'>خانه</NavLink>
          </li>
          <li className='menu-item'>
            <NavLink to='/contact'>تماس با ما</NavLink>
          </li>
          <li className='menu-item'>
            <NavLink to='/about'>درباره ما</NavLink>
          </li>
        </ul>
      }
      <div className='flex align-center'>
        {!showLoginButton ?
          <></>
          :
          auth?.accessToken ?
            <button className='login-btn m-l-20' onClick={signout}>خروج</button>
            :
            <button className='login-btn m-l-20' onClick={() => history.push('/login')}>ورود</button>
        }
        <Link to={'/'}><img className='logo' width='102' height='60' src={require(`../assets/images/logo.webp`)} alt='logo' /></Link>
      </div>
    </header>
  );
}

export default Header;
