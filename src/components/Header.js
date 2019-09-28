import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from 'mdbreact';
import { removeAuth, getAuth } from '../utils';
import { useSelector } from 'react-redux';
import $ from 'jquery';

const Header = props => {
  const [collapse, setCollapse] = useState(false);
  const [x, setX] = useState(false);
  const toggleNavBarHandler = () => {
    setCollapse(!collapse);
  };

  const bgColor = { backgroundColor: '#6e00ff' };

  const logoutHandler = () => {
    setX(!x); // this is just to show you that with out having a state chage the login button wont shows up after a logout. the functionality and redirect works.
    removeAuth();
    props.history.push('/login');
    setCollapse(false);
  };
  return (
    <header>
      <MDBNavbar style={bgColor} dark expand='md' scrolling>
        <MDBNavbarBrand href='/'>
          <strong>Xpns</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleNavBarHandler} />
        <MDBCollapse isOpen={collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem activeclassname='active'>
              <MDBNavLink
                activeclassname='active'
                to='/dashboard'
                onClick={() => setCollapse(false)}
              >
                Dashboard
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem activeclassname='active'>
              <MDBNavLink
                activeclassname='active'
                to='/about'
                onClick={() => setCollapse(false)}
              >
                About
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem activeclassname='active'>
              {getAuth() === null ? (
                <MDBNavLink
                  activeclassname='active'
                  to='/login'
                  onClick={() => setCollapse(false)}
                >
                  login
                </MDBNavLink>
              ) : (
                <MDBNavLink
                  activeclassname='active'
                  to='/'
                  onClick={logoutHandler}
                >
                  logout
                </MDBNavLink>
              )}
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavLink to='/dashboard' onClick={() => setCollapse(false)}>
              {getAuth() !== null && `Hi, ${getAuth().display_name} `}
            </MDBNavLink>
            <MDBNavItem>
              <a
                className='nav-link'
                target='_blank'
                href='https://github.com/arunharshan'
              >
                <MDBIcon fab icon='github' />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                className='nav-link'
                target='_blank'
                href='https://www.linkedin.com/in/arunharshan/'
              >
                <MDBIcon fab icon='linkedin' />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                className='nav-link'
                target='_blank'
                href='https://www.instagram.com/arunharshan/'
              >
                <MDBIcon fab icon='instagram' />
              </a>
              <MDBNavLink to='#'></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </header>
  );
};
export default Header;
