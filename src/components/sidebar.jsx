import React, {
	Component
} from 'react';
import Driver from './driver';
import Job from './jobs';

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

		const jobs = [
			{
				name: 'Jonathan Rosham',
				due: 10,
				status: 'En Route',
				location: 'NYC Warehouse',
				number: 2244308
			}
		];


		const allDrivers = drivers.map( ( driver ) => (
			<Driver driver={driver} key={driver.name}/>
		) );

		const allJobs = jobs.map((job) => (
			<Job job={job} key={job.number} />
		));

		return (
			<div className='side-bar'>
        <input className='search' placeholder='search'/>
          <div className='btn'>MENU</div>
        <div className='drivers btn'>
          <p>All Drivers (1)</p>
		        {allDrivers}
      	</div>
				<div className='jobs'>
					<div className='btn'>
						<p>All Jobs (1)</p>
						{allJobs}
					</div>
				</div>

    </div>
		);
	}
}

export default SideBar;
