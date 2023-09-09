import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function PracticeProblemList({ practiceProblems, semester, course }) {
  return (
    <ul className="assignment-list">
      {practiceProblems.map((practiceProblem) => (
        <li key={practiceProblem.problem_id} className="assignment-item">
          <h3>{practiceProblem.name}</h3>
          {/* <p>Difficulty: {practiceProblem.difficulty}</p> */}
          <Link to={`/semesters/${semester.semester_id}/courses/${course.course_id}/problems/${practiceProblem.problem_id}`}>See Details</Link>
        </li>
      ))}
    </ul>
  );
}


