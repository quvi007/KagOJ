import { Outlet, useLoaderData, NavLink, useNavigation, useNavigate } from "react-router-dom";
import { getCourses } from "../courses";
import { getSemester } from "../semesters";

export async function loader( {params} ) {
    const semesterId = params.semesterId;
    const courses = await getCourses(semesterId);
    const semesterName = (await getSemester(semesterId)).name;
    return { courses, semesterId, semesterName };
}

export default function CoursesRoot() {
    const { courses, semesterId, semesterName } = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();

    return (
      <>
        <div id="sidebar">
          <h1>Courses</h1>
          <div >
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search courses"
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
            {courses.length ? (
              <ul>
                {courses.map((course) => (
                  <li key={course.course_id}>
                    <NavLink
                      to={`${course.course_id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "active"
                          : isPending
                          ? "pending"
                          : ""
                      }
                    >
                      {course.name ? (
                        <>
                          {course.name}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {course.favorite && <span>★</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No courses</i>
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