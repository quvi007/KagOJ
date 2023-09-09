import React, { useState } from 'react';
import '../css/assignments.css';
import PracticeProblemList from './practiceProblemList';
import { useLoaderData } from "react-router-dom";

export default function PracticeProblems({problems}) {

  return (
    <>
        <div className="available-assignments-container">
        <h1>Practice Problems</h1>
        <PracticeProblemList practiceProblems={problems} />
        </div>
    </>
    
  );
}






