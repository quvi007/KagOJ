// src/AddStudentPage.js
import React, { useState } from 'react';
import '../css/addNewStudent.css'; // Create this CSS file for styling

const AddStudent = () => {
  // Sample list of students
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Rakib bhai' },
    { id: 5, name: 'Alice Bekar' },
    { id: 6, name: 'Johnson' },
    { id: 7, name: 'Alice' },
    // Add more students as needed
  ]);

  const [selectedStudents, setSelectedStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectAll, setSelectAll] = useState(false); 


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };



  const toggleSelectAll = () => {
    setSelectAll(!selectAll);

    // Select all students if not already selected, otherwise clear selection
    if (!selectAll) {
      setSelectedStudents(students);
    } else {
      setSelectedStudents([]);
    }
  };

  const handleSelectStudent = (student) => {
    const isSelected = selectedStudents.includes(student);
    if (isSelected) {
      setSelectedStudents(selectedStudents.filter((s) => s !== student));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const handleAddToCourse = () => {
    // Implement adding selected students to the course here
    console.log('Selected students:', selectedStudents);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toString().includes(searchTerm) // Search by student ID
    );
  return (
    <div className="add-student-page">
      <h2 className='h1-container'>Add Students to Course</h2>
      <div className="search-sort">
        <input
          type="text"
          placeholder="Search by Name/ID"
          value={searchTerm}
          onChange={handleSearch}
        />


        <button onClick={toggleSelectAll}>
          {selectAll ? 'Deselect All' : 'Select All'}
        </button>

      </div>
      <div className="student-list">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            className={`student ${selectedStudents.includes(student) ? 'selected' : ''}`}
            onClick={() => handleSelectStudent(student)}
          >
            <span>{student.name}</span>
            <span>{`Student ID: ${student.id}`}</span>
          </div>
        ))}
      </div>
      <button onClick={handleAddToCourse} className="add-button">
        Add to Course
      </button>
    </div>
  );
}



export default function AddNewStudent() {
    return (
      <div className="App">
        <AddStudent />
      </div>
    );
  }
  
