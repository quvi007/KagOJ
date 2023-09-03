import sortBy from "sort-by";

import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6InJha2liQGdtYWlsLmNvbSIsImF1dGhvcml0eSI6MCwiaWF0IjoxNjkzNzE5MjM2fQ.gVqIxscXLl0OH0_TRz3Qk6hPdWz_MIUmmJr3hPG8yjQ"

export async function getProblems(semester_id, course_id) {
  const config = {
    headers: {
      authorization: token
    }
  }
  const res = await axios.get(`http://localhost:3005/api/problem/${semester_id}/${course_id}`, config);
  const problems = res.data;
  const retData = problems.sort(sortBy("name"));
  return retData;
}

export async function createProblem(semester_id, course_id, problem) {
  const config = {
    headers: {
      authorization: token
    }
  }
  let id = Math.floor(Math.random() * (8000));
  problem = { ...problem, problem_id: id};
  const res = await axios.post(`http://localhost:3005/api/problem/${semester_id}/${course_id}`, problem, config);
  return res.data[0];
}

export async function getProblem(semester_id, course_id, problem_id) {
  const config = {
    headers: {
      authorization: token
    }
  }
  const res = await axios.get(`http://localhost:3005/api/problem/${semester_id}/${course_id}/${problem_id}`, config);
  const semester = res.data[0];
  return semester ?? null;
}

export async function updateCourse(semester_id, course_id, updates) {
  const config = {
    headers: {
      authorization: token
    }
  }
  const res = await axios.put(`http://localhost:3005/api/course/${semester_id}/${course_id}`, updates, config);
  return res.data[0] ?? null;
}

export async function deleteCourse(semester_id, course_id) {
  const config = {
    headers: {
      authorization: token
    }
  }
  const res = await axios.delete(`http://localhost:3005/api/course/${semester_id}/${course_id}`, config);
  return res.data ?? null;
}

export async function assignCourse(semester_id, course_id) {
  const config = {
    headers: {
      authorization: token
    }
  }
  const res = await axios.post(`http://localhost:3005/api/course/${semester_id}/${course_id}/assign`, {}, config);
  return res.data[0];
}