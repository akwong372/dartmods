import React from 'react';

const createEntry = (props) => (
  <div className='modal fade container-fluid' id='createEntryModal' tabIndex='-1' role='dialog'>
    <div className='modal-dialog modal-dialog-centered modal-lg'>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className='modal-title'>Submission Form</h4>
        </div>

        <div className="modal-body">
          <form className='px-sm-1' action="">
            <div className="container-fluid" id='formContainer'>

              <div className="col formElement" id='titleContainer'>
                <label htmlFor="submitTitle">Title:</label>
                <br />
                <input type="text" id='submitTitle' placeholder='Title here...' size='30' required />
              </div>

              <div className="col formElement" id='descriptionContainer'>
                <label htmlFor="submitDescription">Description:</label>
                <br />
                <input type="text" id='submitDescription' placeholder='Description here...' size='30' required />
              </div>

              <div className="col formElement" id='partsContainer'>
                <label htmlFor="submitParts">Parts/tools list:</label>
                <br />
                <input type="text" id='submitParts' placeholder='k26' size='30' />
              </div>

              <div className="col formElement" id='TagsContainer'>
                <label htmlFor="submitTags">Tags:</label>
                <br />
                <input type="text" id='submitTags' placeholder='tag1 tag2 etc...' size='30' required />
              </div>

              <div className="col" id='submitMainContainer'>
                <label htmlFor="submitMain">Post contents:</label>
                <textarea id="submitMain" name="submitMain"
                  rows="5" cols="90" placeholder='What would you like to type?' wrap='soft' required>
                </textarea>
              </div>


              <hr />
              <div className="submissionButtonContainer">
                <button type="button" className="btn btn-secondary mx-sm-1" data-dismiss="modal">Cancel</button>
                <button type="submit" className='btn btn-success mx-sm-1'>Submit</button>
              </div>

            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
);

export default createEntry;