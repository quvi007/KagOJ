import { Form, useNavigate } from "react-router-dom";

export default function SemesterEditComponent({semester}) {
    const navigate = useNavigate();
    return (
        <>
            <Form method="post" id="semester-form">
            <p>
                <span>Name</span>
                <input
                placeholder="Semester Name"
                aria-label="Semester name"
                type="text"
                name="name"
                defaultValue={semester.name}
                />
            </p>
            <label>
                <span>Avatar URL</span>
                <input
                placeholder="https://example.com/avatar.jpg"
                aria-label="Avatar URL"
                type="text"
                name="avatar"
                defaultValue={(semester.avatar ? semester.avatar : "https://placekitten.com/g/200/200")}
                />
            </label>
            <label>
                <span>Description</span>
                <textarea
                name="description"
                defaultValue={semester.description}
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
            {/* <Form
            method="post"
            action={`/semesters/${semester.id}/delete`}
            onSubmit={(event) => {
            if (
                !confirm(
                "Please confirm you want to cancel creating this semester."
                )
            ) {
                event.preventDefault();
            }
            }}
        >
            <button type="submit" className="btn btn-outline-danger">Cancel</button>
        </Form> */}
        </>
    );
}