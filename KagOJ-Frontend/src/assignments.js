import sortBy from "sort-by";

import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6InJha2liQGdtYWlsLmNvbSIsImF1dGhvcml0eSI6MCwiaWF0IjoxNjk0MTk1NzM0fQ.pHGv5yhOcy8UP7MCyLx5CTt71EWDOZUa5mMZy3BkqBU";

export async function getAssignments(courseId, semesterId) {
    const config = {
      headers: {
        authorization: token
      }
    }
    const res = await axios.get(`http://localhost:3005/api/assignment/${semesterId}/${courseId}`, config);
    const assignments = res.data;
    const retData = assignments.sort(sortBy("name"));
    console.log(retData);
    return retData;
}

export async function createAssignment(assignment, courseId, semesterId) {
  const config = {
    headers: {
      authorization: token
    }
  }
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