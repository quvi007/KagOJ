import React from "react";
import { Form, useNavigate, useNavigation } from "react-router-dom";

// import "../../css/problem.css";
  
//   import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { styled } from '@mui/material/styles';

const verdicts = 
["Accepted","TLE","TLE","MLE","RTE","SE","WA","In Queue"]

  const ProblemSubmission = (props) => {
    
    const navigation = useNavigation();
    const navigate = useNavigate();
    
    const submissions = props.submissions;
    const problem = props.problem;

    console.log("in problem submission");
    // console.log(submissions);
    // return (
    //   <div>
    //     <h2>Submissions</h2>
    //     {submissions.map((submission, i) => {
    //         return (
    //           <Grid item xs={12} >
    //             <div
    //               className={"topic-container"}
    //               onClick={() => {
    //                 props.history.push(
    //                   `/course/${submission.submission_id}`
    //                 );
    //               }}
    //             >
    //               <div className={"topic-top-container"}>
                    
    //                   <div className={""}>{submission.submission_id}</div>
    //                   <div className={"topic-title"}>{submission.problem_id}</div>
                    
                    
    //               </div>
                  
    //             </div>
    //           </Grid>
    //         );
    //       })}
    //   </div>
    // );

    return (
      <>

        <Form method="get">
          <select name="verdict" id="verdict">
            <option value="8">All</option>
            <option value="0">Accepted</option>
            <option value="1">TLE</option>
            <option value="3">MLE</option>
            <option value="4">RTE</option>
            <option value="5">SE</option>
            <option value="6">WA</option>
            <option value="7">In Queue</option>
          </select>
          <button type="submit">Filter</button>
        </Form>

        <table className="table" >
        
            <thead>
             
                <th>Submission ID </th>
               <th align="right">Problem Name</th>
                <th align="right">Partial Verdict</th>
                <th align="right">Final Verdict</th>
             
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.submission_id}>
                  <td  scope="row"  onClick={() =>  {
                navigate(`submission/${submission.submission_id}`);
              }
            } >
                  {submission.submission_id}
                  </td>
                  <td align="right">{problem.name}</td>
                  <td align="right">{verdicts[submission.partial_verdict]}</td>
                  <td align="right">{verdicts[submission.final_verdict]}</td>
                </tr>
              ))}
            </tbody>
         
        </table>
      </>
      );

  };
  
  export default ProblemSubmission;
  