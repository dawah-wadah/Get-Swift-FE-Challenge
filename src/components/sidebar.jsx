import React, {
	Component
} from 'react';
import Driver from './driver';
import Job from './jobs';



const drivers = [
	{
		name: 'Taylor Swift',
		jobs: 1,
		wait: 15,
		photo: '/images/Taylor-Swift.jpg'
	},
	{
		name: 'Rick Sanchez',
		jobs: 2,
		wait: 45,
		photo: '/images/rick.jpg'
	}
];

const jobs = [
	{
		name: 'Jonathan Rosham',
		due: 2,
		status: 'En Route',
		location: 'NYC Warehouse',
		number: 2244308
	},
	{
		name: 'Morty',
		due: 0,
		status: 'Delivered',
		location: 'Statue of Liberty',
		number: 8675309
	},
	{
		name: 'Tyler Durden',
		due: 4,
		status: 'Cancelled',
		location: 'Paper Street Soap Company',
		number: 21230034
	},

];

const allDrivers = drivers.map( ( driver ) => (
	<Driver driver={driver} key={driver.name}/>
) );

const allJobs = jobs.map( ( job ) => (
	<Job job={job} key={job.number} />
) );

const SideBar = () => (
	<div className='side-bar'>
        <input className='search' placeholder='search'/>
          <div className='btn menu-name'>MENU</div>
        <div className='drivers btn'>
          <div className='menu-name'>All Drivers ({allDrivers.length})</div>
		        {allDrivers}
      	</div>
				<div className='jobs'>
					<div className='btn'>
						<div className='menu-name'>All Jobs ({allJobs.length})</div>
						{allJobs}
					</div>
				</div>

    </div>
);

export default SideBar;
