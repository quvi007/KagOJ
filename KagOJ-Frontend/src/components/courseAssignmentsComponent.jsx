import React, { useState } from 'react';
import '../css/assignments.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CourseAssignmentsComponent({assignments, course, semester}) {
  const navigate = useNavigate();

  return (
    <>
        <div className="available-assignments-container">
        <h1>Upcoming Assignments</h1>
        <AssignmentList assignments={assignments} course={course} semester={semester}/>
        </div>
    </>
    
  );
}


const AssignmentList = ({ assignments, course, semester }) => {
  return (
    <ul className="assignment-list">
      {assignments.map((assignment) => (
        <>
        <li key={assignment.id} className="assignment-item">
          <div className="card">
            <div className="card-header">
              You have an assignment that needs attention
            </div>
            <div className="card-body">
              <h3 className="card-title">{assignment.name}</h3>
              <p className="card-text">Deadline: {new Date(assignment.deadline).toLocaleString()}</p>
              <Link className="btn btn-primary" to={`/semesters/${semester.semester_id}/courses/${course.course_id}/assignments/${assignment.assignment_id}`}>See Details</Link>
            </div>
          </div>
        </li>
        </>
      ))}
    </ul>
  );
}

