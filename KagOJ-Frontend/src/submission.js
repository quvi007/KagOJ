import axios from "axios";


// 
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6InJha2liQGdtYWlsLmNvbSIsImF1dGhvcml0eSI6MCwiaWF0IjoxNjkzNzEzNjE1fQ.mSLgvByHBlSJIzshq9kwsj8N7BO3tGNqyUEnraVfYdQ"
export async function submitSolution (submission) {
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


export async function fetchSubmissions (problem_id){
  const res = await axios.get(`http://localhost:3005/api/submission/getSubmissions/${problem_id}`, {
    headers: { authorization: token },
    });
    return res.data;
}

export async function fetchSubmission (submission_id){
  const res = await axios.get(`http://localhost:3005/api/submission/getSubmission/${submission_id}`, {
    headers: { authorization: token },
    });
    
    return res.data;
}

export async function fetchProblem(semester_id, course_id, problem_id){
  const res = await axios.get(`http://localhost:3005/api/problem/${semester_id}/${course_id}/${problem_id}`, {
    headers: { authorization: token },
    });

    return res.data;
}