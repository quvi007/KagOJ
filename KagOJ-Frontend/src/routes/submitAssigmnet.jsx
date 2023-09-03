import React, { useState, useEffect } from 'react';
import '../css/submitAssignment.css';

const SubmitAssignmentForm = ({ assignmentData, onSubmit }) => {
  const [attachmentFile, setAttachmentFile] = useState(assignmentData.attachment);
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  function getRemainingTime() {
    const deadlineTime = new Date(assignmentData.deadline).getTime();
    const currentTime = new Date().getTime();
    return Math.max(deadlineTime - currentTime, 0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [assignmentData.deadline]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAttachmentFile(file);
  };

  const handleSubmit = () => {
    const submissionData = {
      title: assignmentData.title,
      deadline: assignmentData.deadline,
      attachment: attachmentFile,
    };
    onSubmit(submissionData);
  };

  const formatTime = (time) => {
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);
    const days = Math.floor(time / 1000 / 60 / 60 / 24);

    return `${days}d ${hours}h ${minutes}m`;
  };

  return (
    <div className="assignment-form">
      <div className="assignment-title">
        <h2>{assignmentData.title}</h2>
      </div>
      <div className="deadline-timer">
        <p>
          Deadline: {new Date(assignmentData.deadline).toLocaleString()} (
          {formatTime(remainingTime)} remaining)
        </p>
      </div>
      <div className="attachment">
        <label>Attachment:</label>
        <input
          type="file"
          accept=".zip, .pdf, .jpg, .jpeg, .png"
          onChange={handleFileChange}
        />
        {attachmentFile && (
          <button className="edit-button">Edit Attachment</button>
        )}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}



function SubmitAssignment() {
  // Dummy assignment data for testing
  const assignmentData = {
    title: 'Sample Assignment',
    deadline: '2023-09-10T18:00',
    attachment: null,
  };

  const handleSubmit = (data) => {
    // Handle submission logic here
    console.log('Submitted Assignment:', data);
  };

  return (
    <div className="submit-assignment-container">
      <h1>Submit Assignment</h1>
      <SubmitAssignmentForm
        assignmentData={assignmentData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default SubmitAssignment;
