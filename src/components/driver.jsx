import React, {
	Component
} from 'react';


const Driver = ( {driver} ) => (
	<div className='driver item'>
        <div className='driver-info'>
        <div className='driver-photo'>
          <img src={driver.photo}/>
        </div>
        <div className='center'>
          <div className='red bold'>{driver.name.toUpperCase()}</div>
          <div className='black left'>{driver.jobs} jobs</div>
        </div>

        </div>
        <div className='center'>
          <div className='bold black'>{'Available In'.toUpperCase()}</div>
          <div className='black right'>{driver.wait} mins</div>
        </div>

      </div>
);

export default Driver;
