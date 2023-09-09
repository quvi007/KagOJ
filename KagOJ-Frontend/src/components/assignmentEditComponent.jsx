import { Form, useNavigate } from "react-router-dom";

export default function AssignmentEditComponent({assignment, course, semester}) {
    const navigate = useNavigate();
    return (
        <>
            <Form method="post" id="semester-form">
            <p>
                <span>Name</span>
                <input
                placeholder="Assignment Name"
                aria-label="Assignment name"
                type="text"
                name="name"
                defaultValue={assignment.name}
                />
            </p>
            <label>
                <span>Statement</span>
                <textarea
                name="statement"
                defaultValue={assignment.statement}
                rows={6}
                />
            </label>
            <p>
                <button type="submit" className="btn btn-outline-primary">Save</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => {
                navigate(-1);
                }
                }>Cancel</button>
            </p>
            </Form>
        </>
    );
}