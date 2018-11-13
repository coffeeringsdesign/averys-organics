import React from 'react';

function StatusForm() {
 return(
   <form onSubmit={handleNewStatusSubmission}>
        <textarea
          id='issue'
          placeholder='Update '
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
 );
}


export default StatusForm;
