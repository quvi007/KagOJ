import sortBy from "sort-by";

import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6InJha2liQGdtYWlsLmNvbSIsImF1dGhvcml0eSI6MCwiaWF0IjoxNjk0MTk1NzM0fQ.pHGv5yhOcy8UP7MCyLx5CTt71EWDOZUa5mMZy3BkqBU";

export async function getCourses(semester_id) {
  const config = {
    headers: {
      authorization: token
    }
  }
  const res = await axios.get(`http://localhost:3005/api/course/${semester_id}`, config);
  const courses = res.data;
  const retData = courses.sort(sortBy("name"));
  return retData;
}

export async function createCourse(semester_id, course) {
  const config = {
    headers: {
      authorization: token
    }
  }
  let id = Math.floor(Math.random() * (8000));
  course = { ...course, course_id: id};
  const res = await axios.post(`http://localhost:3005/api/course/${semester_id}`, course, config);
  return res.data[0];
}

export async function getCourse(semester_id, course_id) {
  console.log("Here now");
  const config = {
    headers: {
      authorization: token
    }
  }
  const res = await axios.get(`http://localhost:3005/api/course/${semester_id}/${course_id}`, config);
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

// 
export async function submitSolution (submission) {
  console.log("Submitting solution");
  return axios
    .post("http://localhost:3005/api/submission/submit", submission, {
      headers: { authorization: token },
    })
    .then((res) => {
      return res.data;
      //console.log(res.data)
    })
    .catch((err) => {
      return err;
      //console.log(err)
    });
}