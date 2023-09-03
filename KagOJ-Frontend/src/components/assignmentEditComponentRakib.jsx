import React, { useState } from 'react';
import CreateAssignmentForm from './createAssignmentForm';
import '../css/createAssignment.css'; 

export default function AssignmentEditComponent() {
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
