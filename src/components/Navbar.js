import { Link, NavLink } from 'react-router-dom';
import { links } from '../data';
import { useState } from 'react';
import Logo from './../images/logo.png';
import { AiOutlineBars } from 'react-icons/ai'
import { MdOutlineClose } from 'react-icons/md'
import './navbar.css';

const Navbar = () => {
     const[isNavShowing, setisNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setisNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {links.map(({ name, path },index) => (
            <li  key={index}>
              <NavLink
                to={path}
                className={({isActive}) => isActive ? 'active-nav' : ''}
                onClick={() => setisNavShowing(prev => !prev)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className='nav__toggle-btn' onClick={() => setisNavShowing(prev => !prev)}>
  {isNavShowing ? <MdOutlineClose /> : <AiOutlineBars />}
</button>

  </div>
    </nav>
  );
};

export default Navbar;


