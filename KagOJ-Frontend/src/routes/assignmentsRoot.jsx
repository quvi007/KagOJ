import { Outlet, useLoaderData, NavLink, useNavigation, useNavigate } from "react-router-dom";
import { getAssignments } from "../assignments";
import { getSemester } from "../semesters";
import { getCourse } from "../courses";

export async function loader( {params} ) {
    const semesterId = params.semesterId;
    const courseId = params.courseId;
    const assignments = await getAssignments(courseId, semesterId);
    const semesterName = (await getSemester(semesterId)).name;
    const courseName = (await getCourse(courseId)).name;
    return { assignments, semesterId, courseId, semesterName, courseName };
}

export default function AssignmentsRoot() {
    const { assignments, semesterId, courseId, semesterName, courseName } = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();

    return (
      <>
        <div id="sidebar">
          <h1>Assignments</h1>
          <div >
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search assignments"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <button type="button" className="btn btn-outline-primary" onClick={
              () => {
                navigate("new");
              }
            }>New</button>
          </div>
          <nav>
            {assignments.length ? (
              <ul>
                {assignments.map((assignment) => (
                  <li key={assignment.id}>
                    <NavLink
                      to={`${assignment.id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "active"
                          : isPending
                          ? "pending"
                          : ""
                      }
                    >
                      {assignment.title ? (
                        <>
                          {assignment.title}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {assignment.favorite && <span>★</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No assignments</i>
              </p>
            )}
          </nav>
        </div>
        <div id="detail"
          className={navigation.state === "loading" ? "loading" : ""}>
          <Outlet/>
        </div>
      </>
    );
  }