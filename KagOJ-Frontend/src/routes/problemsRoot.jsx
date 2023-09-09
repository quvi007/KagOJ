import { Outlet, useLoaderData, NavLink, useNavigation, useNavigate } from "react-router-dom";
import { getSemester } from "../semesters";
import { getCourse } from "../courses";
import { getProblems } from "../problems";

export async function loader( {params} ) {
    const semesterId = params.semesterId;
    const courseId = params.courseId;
    const problems = await getProblems(semesterId, courseId);
    const semesterName = (await getSemester(semesterId)).name;
    const courseName = (await getCourse(semesterId, courseId)).name;
    return { problems, semesterId, courseId, semesterName, courseName };
}

export default function ProblemsRoot() {
    const { problems, semesterId, courseId, semesterName, courseName } = useLoaderData();
    
    const navigation = useNavigation();
    const navigate = useNavigate();

    return (
      <>
        <div id="sidebar">
          <h1>Problems</h1>
          <div >
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search problems"
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
            {problems.length ? (
              <ul>
                {problems.map((problem) => (
                  <li key={problem.problem_id}>
                    <NavLink
                      to={`${problem.problem_id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "active"
                          : isPending
                          ? "pending"
                          : ""
                      }
                    >
                      {problem.name ? (
                        <>
                          {problem.name}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {problem.favorite && <span>★</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No problems</i>
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