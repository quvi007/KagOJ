import React from 'react';
import { useLoaderData } from "react-router-dom";
// import '../../css/problem-container.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import CodeEditor from '../components/codeEditor';
import ProblemStatement from '../components/problemStatement';
import ProblemSubmission from '../components/problemSubmission';
import { fetchProblem, fetchSubmissions } from '../submission';


export async function loader({ params }) {
    const semesterId = params.semesterId;
    const courseId = params.courseId;
    const problemId = params.problemId;
    const problem = await fetchProblem(semesterId, courseId, problemId);
    console.log("problem:: ",problem);
    const submissions = await fetchSubmissions(problemId);
    console.log("submissions:: ",submissions);
    return { problem, submissions };
}
const ProblemContainer=props=>{

    const {problem,submissions} = useLoaderData();
    

    // const problem_id = props.match.params.problem_id;
    const problem_id = 1;




//     const [problem,setProblem]=useState({
//         problem_id:1,
//         name:"Lorem Ipsum",
//         statement:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam n",
//         input:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam n",
//         output:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam n",
//         time_limit:1000,
//     });
//     const [submissions,setSubmissions]=useState([{
//         submission_id:1,
//         problem_id:1,
//         user_id:1,
//         partial_verdict:0,
//         final_verdict:0,
//         time:0,
//         memory:0,
//         language:0,
//         code:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam n"
//     },{
//         submission_id:2,
//         problem_id:1,
//         user_id:1,
//         partial_verdict:0,
//         final_verdict:0,
//         time:0,
//         memory:0,
//         language:0,
//         code:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam n"
//     },

// ]);
   

    // useEffect(()=>{
    //     fetchProblems(problem_id).then(res=>{
    //         setProblem(res)
    //         console.log("problem");
    //         console.log(res);
    //     })
    // },[])
    // useEffect(()=>{
    //     fetchSubmissions(problem_id).then(res=>{
    //         setSubmissions(res)
    //         console.log("submissions");
    //         console.log(res);
    //     })
    // },[])


    return(
        <div style={{padding:'20px'}}>
           
            {
                problem!==null ?(
                    <div>
                        <h2>{problem.name}</h2>
                        <span className={"badgeme"}>{problem.time_limit} ms </span>
                        <span className={"badgeme"}>{10} MB</span>
                        <Tabs
                            defaultActiveKey="statement"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            >
                            <Tab eventKey="statement" title="Statement">
                                <ProblemStatement problem={problem} />
                                <hr></hr>

                                <CodeEditor code={""}  problem_id={problem.problem_id}/>
                            </Tab>
                            <Tab eventKey="submission" title="Submission">
                                <ProblemSubmission submissions={submissions} problem={problem} />
                            </Tab>
                            <Tab eventKey="tutorial" title="Tutorial" disabled>
                                Tab content for Contact
                            </Tab>
                            </Tabs>
                        
                    </div>
                ):(
                    <div/>
                )

            }
             
        </div>
    )
}

export default ProblemContainer
