import React, { useState } from 'react';
import '../css/assignments.css';
import PracticeProblemList from './practiceProblemList';
import { useLoaderData } from "react-router-dom";

export default function PracticeProblems() {
  const { practiceProblems, course, semester } = useLoaderData();

  return (
    <>
        <div className="available-assignments-container">
        <h1>Practice Problems</h1>
        <PracticeProblemList practiceProblems={practiceProblems} />
        </div>
    </>
    
  );
}






