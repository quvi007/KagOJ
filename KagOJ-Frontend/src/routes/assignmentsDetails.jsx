import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

function AssignmentDetails({ assignments }) {
  const { assignmentId } = useParams(); // Get the assignment ID from the URL parameter
  const assignment = assignments.find((assignment) => assignment.id === parseInt(assignmentId));

  if (!assignment) {
    return <div>Assignment not found.</div>;
  }

  return (
    <div>
      <h2>Assignment Details</h2>
      <h3>{assignment.title}</h3>
      <p>Deadline: {new Date(assignment.deadline).toLocaleString()}</p>
      <p>Details: {assignment.details}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default AssignmentDetails;
