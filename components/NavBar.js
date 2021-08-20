import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  const isActive = (path) => {
    const className = path == router.pathname ? 'active' : '';
    return className;
  };
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link href='/'>
          <a className='brand-logo'>Buy & Sell</a>
        </Link>
        <ul id='nav-mobile' className='right'>
          <li className={isActive('/login')}>
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </li>
          <li className={isActive('/signup')}>
            <Link href='/signup'>
              <a>Signup</a>
            </Link>
          </li>
          <li className={isActive('/create')}>
            <Link href='/create'>
              <a>Create</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
