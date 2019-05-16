import React from 'react';

const userSubmissionModal = (props) => (
  <div className='modal fade container-fluid' id={'userSubmissionModal' + props.postNumber} tabIndex='-1' role='dialog'>
    <div className='modal-dialog modal-dialog-centered modal-lg'>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className='modal-title'>{JSON.parse(props.title)}</h4>
          <h5>Author: {props.author}</h5>
        </div>
        <div className='container'>
          <div>Likes: {props.likes}
            <button type='button' onClick={()=>props.addLike(props.postId)} disabled={!props.currentUser}>Click to like</button>
          </div>
          <div>Date: {new Date(Date.parse(props.date)).toDateString()}</div>
        </div>
        <div className="modal-body">
          <div>Description: {JSON.parse(props.description)}</div>
          <div>Parts: {JSON.parse(props.parts)}</div>
          <div>Tags: {props.tags.join(', ')}</div>
          <div className='mainText'>Main: {JSON.parse(props.main)}</div>
        </div>
      </div>
    </div>
  </div>
);

export default userSubmissionModal;