import React from 'react';

const Job = ({job}) => (

    <div className='item'>
      <div className='job-left'>
        <div className='number'>{job.number}</div>
        <div className='location'>{job.location}</div>
        <div className='job-name bold'>{job.name}</div>
        <div className='due bold'>{job.due}</div>
      </div>
      <div className='job-right'>
        <div className='status bold'>{job.status}</div>
        <div className='due'>{job.due}</div>
      </div>
    </div>


);

export default Job;
