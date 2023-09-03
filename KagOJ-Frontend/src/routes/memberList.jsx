import React, { useState } from 'react';
import '../css/memberList.css';

const Student = ({ name, studentId, photoUrl, onDelete, className }) => {
    return (
      <div className={`student ${className}`}>
        <img src={photoUrl} alt={`${name}'s photo`} />
        <div className="student-info">
          <h3>{name}</h3>
          <p>Student ID: {studentId}</p>
        </div>
        <button onClick={() => onDelete(studentId)} className="btn btn-danger"
        style={{ marginLeft: '620px' }}>
          Remove
        </button>
      </div>
    );
  };
  
  

  
const StudentList = ({ students, searchTerm, onDelete }) => {
    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const handleDelete = (studentId) => {
        // Implement the logic to delete the student from the course
        // Update studentsData with the updated list
    };
    
    return (
        <div className="student-list">
        {filteredStudents.map((student, index) => (
            <Student
            key={student.studentId}
            name={student.name}
            studentId={student.studentId}
            photoUrl={student.photoUrl}
            onDelete={handleDelete}
            className={index % 2 === 0 ? 'even-row' : 'odd-row'}
            />
        ))}
        </div>
    );
};
      

export default function MemberList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [studentsData, setStudentsData] = useState([
        {
            studentId: '123',
            name: 'John Doe',
            photoUrl: 'https://via.placeholder.com/50',
          },
          {
            studentId: '456',
            name: 'Jane Smith',
            photoUrl: 'https://via.placeholder.com/50',
          },
          {
            studentId: '489',
            name: 'Rakib',
            photoUrl: 'https://via.placeholder.com/50',
          },
          {
            studentId: '1',
            name: 'Tamim Ehsan',
            photoUrl: 'https://via.placeholder.com/50',
          },
          {
            studentId: '56',
            name: 'Quvi',
            photoUrl: 'https://via.placeholder.com/50',
          },
    ]);
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleDelete = (studentId) => {
      // Implement the logic to delete the student from the course
      // Update studentsData with the updated list
      console.log(studentId);
    };

    const handleAddStudent = () => {
        // Implement logic to add a new student here
        console.log('Adding a new student');
      };
  
    return (
      <div>
        <h1 className='h1-container'>Enrolled Student List</h1>
        <div>
            <input className='search-container'
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={handleSearch}
            />

            <button className="btn btn-success" style={{ marginLeft: '800px', marginTop: '-80px' }} onClick={handleAddStudent} >
                Add new student
            </button>
        </div>
        
        <StudentList
          students={studentsData}
          searchTerm={searchTerm}
          onDelete={handleDelete}
        />
      </div>
    );
}