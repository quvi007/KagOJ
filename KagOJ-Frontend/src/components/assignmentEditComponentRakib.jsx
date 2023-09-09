import React, { useState } from 'react';
import CreateAssignmentForm from './createAssignmentForm';
import '../css/createAssignment.css'; 

export default function AssignmentEditComponentRakib() {
  return (
    <div className="create-assignment-container">
      <h1>Create Assignment</h1>
      <CreateAssignmentForm/>
    </div>
  );
}
