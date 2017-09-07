import React from 'react';


const headers = [
  'add',
  'map',
  'reports',
  '≡'
];

const allHeaders = headers.map((header) => (
  <li key={header}>{header}</li>
));
const Header = () => (
  <div className='header'>
    <img className='logo' src="images/logo.png"/>
    <ul className='header-menu'>
      {allHeaders}
    </ul>
  </div>
);




export default Header;
