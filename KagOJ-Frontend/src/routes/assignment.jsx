import { Form, Outlet, redirect, useLoaderData } from "react-router-dom";
import { getCourse } from "../courses";
import { getSemester } from "../semesters";
import { getAssignment } from "../assignments";

export async function loader({ params }) {
    const assignment = await getAssignment(params.assignmentId);
    const course = await getCourse(params.courseId);
    const semester = await getSemester(params.semesterId);
    return { assignment, course, semester };
}

export default function Assignment() {
  const { assignment, course, semester } = useLoaderData();
  return (
    <>
    <div>
      <div id="semester">
          <div>
              <h1>
              {assignment.title ? (
                  <>
                  {assignment.title}
                  </>
              ) : (
                  <i>No Title</i>
              )}{" "}
              <Favorite assignment={assignment} />
              </h1>

              <p></p>
              
              {assignment.details && <p>{assignment.details}</p>}

              <div>
              <Form action="submit">
                  <button type="submit" className="btn btn-outline-success">Submit</button>
              </Form>
              <Form action="edit">
                  <button type="submit" className="btn btn-outline-primary">Edit</button>
              </Form>
              <Form
                  method="post"
                  action="delete"
                  onSubmit={(event) => {
                  if (
                      !confirm(
                      "Please confirm you want to delete this course."
                      )
                  ) {
                      event.preventDefault();
                  }
                  }}
              >
                  <button type="submit" className="btn btn-outline-danger">Delete</button>
              </Form>
              </div>
          </div>
          </div>
          <div>
      </div>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
    
  );
}

function Favorite({ assignment }) {
  // yes, this is a `let` for later
  let favorite = assignment.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}