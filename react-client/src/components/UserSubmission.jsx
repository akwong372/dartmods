import React from 'react';
import UserSubmissionModal from './UserSubmissionModal.jsx';

const userSubmission = (props) => (
  <div className='col-md-3'>
    <div data-toggle="modal" data-target={'#userSubmissionModal' + props.postNumber}>
      <div>
        <h4>
          {JSON.parse(props.title)}
        </h4>
        <div className='container text-center'>
          <div className='row'>
            <div className='col'>Likes: {props.likes}</div>
            <div className='col'>Date: {new Date(Date.parse(props.date)).toDateString()}</div>
          </div>
          <div>Description: {JSON.parse(props.description)}</div>
        </div>
      </div>
    </div>

    <UserSubmissionModal
      postNumber={props.postNumber}
      author={props.author}
      likes={props.likes}
      date={props.date}
      title={props.title}
      description={props.description}
      parts={props.parts}
      tags={props.tags}
      main={props.main}
    />
  </div>
);

export default userSubmission;