import sortBy from "sort-by";

import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get('token');
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6InJha2liQGdtYWlsLmNvbSIsImF1dGhvcml0eSI6MCwiaWF0IjoxNjkzNzE5MjM2fQ.gVqIxscXLl0OH0_TRz3Qk6hPdWz_MIUmmJr3hPG8yjQ";
const config = {
  headers: {
    authorization: cookies.get('token')
  }
}
export async function getSemesters(query) {
  const config = {
    headers: {
      authorization: token
    }
  }
  const res = await axios.get('http://localhost:3005/api/semesters', config);
  const semesters = res.data;
  const retData = semesters.sort(sortBy("name"));
  return retData;
}

export async function createSemester(semester) {
  let id = Math.random().toString(36).substring(2, 9);
  semester = { ...semester, semester_id: id};
  const res = await axios.post('http://localhost:3005/api/semesters', semester, config);
  return res.data[0];
}

export async function getSemester(id) {
  const res = await axios.get(`http://localhost:3005/api/semesters/${id}`, config);
  const semester = res.data[0];
  console.log(semester);
  return semester ?? null;
}

export async function updateSemester(id, updates) {
  const res = await axios.put(`http://localhost:3005/api/semesters/${id}`, updates, config);
  return res.data[0] ?? null;
}

export async function deleteSemester(id) {
  const res = await axios.delete(`http://localhost:3005/api/semesters/${id}`, config);
  return res.data ?? null;
}

export async function assignSemester(semester_id) {
  console.log(semester_id);
  const res = await axios.post(`http://localhost:3005/api/semesters/${semester_id}/assign`, {}, config);
  return res.data[0];
}