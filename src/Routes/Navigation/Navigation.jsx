import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase.util';

import "./navigation.styles.scss";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);

    // await signOutUser();
  console.log(currentUser)
  return (
    <>
      <div className='navigation'>
          <Link className='logo-container' to="/">
              <CrwnLogo className='logo' />
          </Link>
          <div className="nav-links-container">
              <Link className='nav-link' to="/shop">SHOP</Link>
              { currentUser 
                ? 
                  <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> 
                : 
                  <Link className='nav-link' to="/auth">SIGN IN</Link> 
              }
              
          </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;