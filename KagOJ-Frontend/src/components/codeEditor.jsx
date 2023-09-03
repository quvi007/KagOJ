import { cpp } from '@codemirror/lang-cpp';
import CodeMirror from '@uiw/react-codemirror';
import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
// import { submitSolution } from "../../action/content";
import { submitSolution } from "../courses";

function CodeEditor(props) {
  const navigation = useNavigation();
    const navigate = useNavigate();
  const [code, setCode] = React.useState(props.code);
  const [submitted, setSubmitted] = React.useState(false);
  let readOnly = false;
  if( props.readOnly === true){
    readOnly = true;
  }
  const problem_id = props.problem_id;
  const handleSubmit = (code) => {
    // disable submit button
    if(submitted === true){
      return;
    }
    setSubmitted(true);
    document.getElementById("submit-btn").disabled = true;
    const submission = {
      problem_id: problem_id,
      code: code,
      language_id:2
    }
    console.log(submission);
    // console.log("returned data: ",res);

    submitSolution(submission).then(res=>{
      navigate(`submission/${res.submission_id}`);
    })
  }

  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
  }, []);
  return (
    <div>
      <div className="p-3"  style={{
      backgroundColor: '#202836',
    }} >
      <CodeMirror
        
        value={code}
        height="500px"
        tabSize={8}
        
        extensions={[cpp()]}
        //   javascript({ jsx: true }), 
        onChange={onChange}
        theme={'dark'}
        readOnly={readOnly}
      />
     </div>
  
    
     { readOnly === false && 
      <div  className={"mt-1"} style={{
        backgroundColor: '#202836',
      }}>
        <button className={"btn btn-primary btn-sm m-3"} onClick={() => console.log('clicked')}>Run on Samples</button>
        <button id={"submit-btn"} className={"btn btn-success btn-sm "} onClick={() => handleSubmit(code)}>Submit</button> 
      </div>
    }
    
   </div>
  );
}
export default CodeEditor;