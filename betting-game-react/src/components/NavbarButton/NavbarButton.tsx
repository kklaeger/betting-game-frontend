import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarButtonProps } from '../Navbar/NavbarButtonProps';

const NavbarButton: React.FC<NavbarButtonProps> = ({
  buttonText,
  buttonURL,
  buttonTestIdPrefix,
}: NavbarButtonProps) => (
  <NavLink
    to={buttonURL}
    className='block mr-4 lg:inline-block lg:mt-0 py-2 border-b-2 border-transparent inline-block text-gray-400 hover:text-white'
    activeClassName='border-gray-400 text-indigo-100'
    data-testid={`${buttonTestIdPrefix}-NavButton`}
  >
    <span data-testid={`${buttonTestIdPrefix}-NavButtonText`}>
      {buttonText}
    </span>
  </NavLink>
);

export default NavbarButton;