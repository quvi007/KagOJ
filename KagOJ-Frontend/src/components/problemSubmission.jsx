import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";

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

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));
  
//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//       border: 0,
//     },
//   }));
  

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
      );

  };
  
  export default ProblemSubmission;
  