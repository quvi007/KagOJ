import sortBy from "sort-by";

import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export async function getAssignments(courseId, semesterId) {
    const res = await axios.get('http://localhost:3000/assignments');
    const assignments = res.data;
    const filteredAssignments = [];
    assignments.forEach((assignment) => {
      if (assignment.courseId === courseId && assignment.semesterId === semesterId) {
        filteredAssignments.unshift(assignment);
      }
    })
    const retData = filteredAssignments.sort(sortBy("title"));
    console.log(retData);
    return retData;
}

export async function createAssignment(assignment, courseId, semesterId) {
  let id = Math.random().toString(36).substring(2, 9);
  assignment = { ...assignment, id: id, courseId: courseId, semesterId: semesterId };
  const res = await axios.post('http://localhost:3000/assignments', assignment);
  return res.data;
}

export async function getAssignment(id) {
  const res = await axios.get(`http://localhost:3000/assignments/${id}`);
  const assignment = res.data;
  return assignment ?? null;
}

export async function updateAssignment(id, courseId, semesterId, updates) {
  updates = {...updates, courseId: courseId, semesterId: semesterId};
  const res = await axios.put(`http://localhost:3000/assignments/${id}`, updates);
  return res.data ?? null;
}

export async function deleteAssignment(id) {
  const res = await axios.delete(`http://localhost:3000/assignments/${id}`);
  return res.data;
}