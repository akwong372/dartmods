import React from 'react';

const createEntry = (props) => (
  <div className='modal fade container-fluid' id='createEntryModal' tabIndex='-1' role='dialog'>
    <div className='modal-dialog modal-dialog-centered modal-lg'>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className='modal-title'>Submission Form</h4>
        </div>
        <div className="modal-body">
          <form action="">
            <input type="text" id='submitTitle' required />
            <input type="text" id='submitDescription' required />
            <input type="text" id='submitParts' required />
            <input type="text" id='submitTags' required />
            <label htmlFor="submitMain">Post contents:</label>

            <textarea id="submitMain" name="submitMain"
              rows="5" cols="90" placeholder='What would you like to type?' wrap='soft' required>
            </textarea>
            <hr />
            <div className="submissionButtonContainer">
              <button type="button" className="btn btn-secondary mx-sm-1" data-dismiss="modal">Cancel</button>
              <button type="submit" className='btn btn-success mx-sm-1'>Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
);

export default createEntry;