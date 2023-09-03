import { Form, Outlet, redirect, useLoaderData } from "react-router-dom";
import { getCourse } from "../courses";
import { getSemester } from "../semesters";

export async function loader({ params }) {
    const course = await getCourse(params.semesterId, params.courseId);
    const semester = await getSemester(params.semesterId);
    return { course, semester };
}

export default function Course() {
  const { course, semester } = useLoaderData();
  return (
    <>
    <div>
      <div id="semester">
          <div>
              <img
              key={course.avatar}
              // src={course.avatar || null}
              src="/spl.jpg"
              />
          </div>
          <div>
              <h1>
              {course.name ? (
                  <>
                  {course.name}
                  </>
              ) : (
                  <i>No Name</i>
              )}{" "}
              <Favorite course={course} />
              </h1>

              <p></p>
              
              {course.description && <p>{course.description}</p>}

              <div>
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

function Favorite({ course }) {
  // yes, this is a `let` for later
  let favorite = course.favorite;
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