import React from 'react';
import '../css/assignmentForm.css'; 


function CreateAssignmentForm() {
  return (
    <form className="assignment-form" onSubmit={onSubmit}>
      <div>
        <label>Assignment Name:</label>
        <input
          type="text"
          name="name"
          required
        />
      </div>
      <div>
        <label>Assignment Statement:</label>
        <textarea
          name="statement"
          required
        />
      </div>
      <div>
        <label>Attachment:</label>
        <input
          type="file"
          accept=".pdf, .jpg, .jpeg, .png, .zip"
        />
      </div>
      <div>
        <label>Deadline:</label>
        <input
          type="datetime-local"
          name="deadline"
          value={assignmentData.deadline}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Create Assignment</button>
    </form>
  );
}

export default CreateAssignmentForm;
