import React, { useState } from 'react';
import '../css/createAssignment.css'; 


const CreateAssignmentForm = ({ assignmentData, setAssignmentData, onSubmit }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAssignmentData((prevData) => ({
      ...prevData,
      attachment: file,
    }));
  };

  return (
    <form className="assignment-form" onSubmit={onSubmit}>
      <div>
        <label>Assignment Title:</label>
        <input
          type="text"
          name="title"
          value={assignmentData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Assignment Details:</label>
        <textarea
          name="details"
          value={assignmentData.details}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Attachment:</label>
        <input
          type="file"
          accept=".pdf, .jpg, .jpeg, .png, .zip"
          onChange={handleFileChange}
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


function CreateAssignment() {
    const [assignmentData, setAssignmentData] = useState({
      title: '',
      details: '',
      attachment: null,
      deadline: '',
    });
  
    const handleAssignmentSubmit = (event) => {
      event.preventDefault();
      // handle assignment submission here
  
      console.log('Assignment Data:', assignmentData);
    };
  
    return (
      <div className="create-assignment-container">
        <h1>Create Assignment</h1>
        <CreateAssignmentForm
          assignmentData={assignmentData}
          setAssignmentData={setAssignmentData}
          onSubmit={handleAssignmentSubmit}
        />
      </div>
    );
  }
  
  export default CreateAssignment;
