import React, {
	Component
} from 'react';


const Driver = ( {driver} ) => (
	<div className='driver'>
        <div className='driver-info'>
        <div className='driver-photo'>
          <img src={driver.photo}/>
        </div>
        <div >
          <p color='red'>{driver.name.toUpperCase()}</p>
          <p>{driver.jobs} jobs</p>
        </div>

        </div>
        <div className='availibilty'>
          <p>{'Available In'.toUpperCase()}</p>
          <div className='text'>{driver.wait} mins</div>
        </div>

      </div>
);

export default Driver;
