import React from 'react';

const Job = ({job}) => (

    <div className='item'>
      <div className='job-left'>
        <div className='number black'>{job.number}</div>
        <div className='location'>{job.location}</div>
        <div className='job-name bold'>{job.name}</div>
        <div className='due bold'>Due {job.due} days ago</div>
      </div>
      <div className='job-right'>
        <div className='status bold'>{job.status}</div>
        <i className="fa fa-bell bottom"></i>
      </div>
    </div>


);

export default Job;
