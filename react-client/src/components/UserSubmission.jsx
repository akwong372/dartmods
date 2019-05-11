import React from 'react';
import UserSubmissionModal from './UserSubmissionModal.jsx';

const userSubmission = (props) => {

  const postDate = new Date(Date.parse(props.date));
  const dateNumber = postDate.getDate();
  const monthNumber = postDate.getMonth() + 1
  const postDateDate = dateNumber > 9 ? dateNumber : '0' + dateNumber;
  const postDateMonth = monthNumber > 9 ? monthNumber : '0' + monthNumber;

  return (
    <div className='col-md-3 my-sm-2 userSubmissionContainer'>
      <div data-toggle="modal" data-target={'#userSubmissionModal' + props.postNumber}>
        <div className='container'>
          <h4>
            {JSON.parse(props.title)}
          </h4>
          <div>
            <div className='row'>
              <div className='col'>Likes: {props.likes}</div>
              <div className='col'>{`${postDate.getFullYear()}/${postDateMonth}/${postDateDate}`}</div>
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
};

export default userSubmission;