import React, {
	Component
} from 'react';
import Driver from  './driver';

class SideBar extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
    const drivers = [
      {
        name: 'Taylor Swift',
        jobs: 1,
        wait: 15,
        photo: '/images/Taylor-Swift.jpg'
      }
    ];


    const allDrivers = drivers.map((driver) =>(
      <Driver driver={driver} key={driver.name}/>
    ));

		return (
			<div className='side-bar'>
        <input className='search' placeholder='search'/>
          <div className='menu btn'>MENU</div>
        <div className='drivers btn'>
          <p>All Drivers (1)</p>
        {allDrivers}
      </div>

      <h1>Side Bar Stuff</h1>
    </div>
		);
	}
}

export default SideBar;
