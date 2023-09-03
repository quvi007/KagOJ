// import { useLoaderData } from "react-router-dom";
// import CourseNavBar from './courseNavBar';
// export default function CourseAssignments() {
//     const { course, semester } = useLoaderData();
//     return (
//         <>
//             <CourseNavBar course={course} semester={semester} tabName="assignments"/>
//             <div>
//                 <h2>Assignments</h2>
//             </div>
//         </>
//     );
// }

import React, { useState } from 'react';
import '../css/assignments.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CourseAssignmentsComponent({assignments, course, semester}) {
  const navigate = useNavigate();

  const [sortOrder, setSortOrder] = useState('asc'); // Default sort order

  const handleSortByDeadline = () => {
    const sortedAssignments = [...assignments].sort((a, b) =>
      sortOrder === 'asc'
        ? a.deadline.localeCompare(b.deadline)
        : b.deadline.localeCompare(a.deadline)
    );
    setAssignments(sortedAssignments);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <>
        <div className="available-assignments-container">
        <h1>Upcoming Assignments</h1>
        <button onClick={handleSortByDeadline}>
            Sort by Deadline ({sortOrder === 'asc' ? 'Asc' : 'Desc'})
        </button>
        <AssignmentList assignments={assignments} course={course} semester={semester}/>
        </div>
    </>
    
  );
}


const AssignmentList = ({ assignments, course, semester }) => {
  return (
    <ul className="assignment-list">
      {assignments.map((assignment) => (
        <li key={assignment.id} className="assignment-item">
          <h3>{assignment.title}</h3>
          <p>Deadline: {new Date(assignment.deadline).toLocaleString()}</p>
          <Link to={`/semesters/${semester.id}/courses/${course.course_id}/assignments/${assignment.id}`}>See Details</Link>
        </li>
      ))}
    </ul>
  );
}

