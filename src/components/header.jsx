import React from 'react';


const headers = [
  'add',
  'map',
  'reports',
  '≡'
];

const allHeaders = headers.map( ( header ) => (
	<li key={header}>{header.toUpperCase()}</li>
) );
const Header = () => (
	<div className='header'>
    <div className='header-right'>
      <img className='logo' src="images/logo.png"/>
    </div>
    <div>
    <ul className='header-left'>
      {allHeaders}
    </ul>
  </div>
  </div>
);




export default Header;
