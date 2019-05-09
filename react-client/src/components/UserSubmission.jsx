import React from 'react';

const userSubmission = (props) => (
  <div>
    <div>Author: {props.author}</div>
    <div>Title: {props.title}</div>
    <div>Description: {props.description}</div>
    <div>Parts: {props.parts}</div>
    <div>Tags: {props.tags}</div>
    <div>Main: {props.main}</div>
  </div>
);

export default userSubmission;