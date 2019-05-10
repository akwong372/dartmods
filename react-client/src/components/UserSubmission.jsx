import React from 'react';
// import UserSubmissionModal from './UserSubmissionModal.jsx';

const userSubmission = (props) => (
  <div className='col'>
    <div  data-toggle="modal" data-target={'#userSubmissionModal' + props.postNumber}>
      <div>{props.title}</div>
    </div>

    <div className='modal fade container-fluid' id={'userSubmissionModal' + props.postNumber} tabIndex='-1' role='dialog'>
      <div className='modal-dialog modal-dialog-centered modal-lg'>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className='modal-title'>Title: {props.title}</h4>
            <h5>Author: {props.author}</h5>
          </div>
          <div className="modal-body">
            <div>Likes: {props.likes}</div>
            <div>Date: {new Date(Date.parse(props.date)).toDateString()}</div>
            <div>Description: {props.description}</div>
            <div>Parts: {props.parts}</div>
            <div>Tags: {props.tags}</div>
            <div>Main: {props.main}</div>
          </div>
        </div>
      </div>
    </div>
  </div >
);

export default userSubmission;