import { Form, useNavigate } from "react-router-dom";

export default function AssignmentEditComponent({assignment, course, semester}) {
    const navigate = useNavigate();
    return (
        <>
            <Form method="post" id="semester-form">
            <p>
                <span>Title</span>
                <input
                placeholder="Assignment Title"
                aria-label="Assignment title"
                type="text"
                name="title"
                defaultValue={assignment.title}
                />
            </p>
            {/* <label>
                <span>Avatar URL</span>
                <input
                placeholder="https://example.com/avatar.jpg"
                aria-label="Avatar URL"
                type="text"
                name="avatar"
                defaultValue={(semester.avatar ? semester.avatar : "https://placekitten.com/g/200/200")}
                />
            </label> */}
            <label>
                <span>Details</span>
                <textarea
                name="details"
                defaultValue={assignment.details}
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