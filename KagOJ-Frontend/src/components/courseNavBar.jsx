import { Link, NavLink } from "react-router-dom";

export default function CourseNavBar({course, semester, tabName}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink replace className={
                                ({isActive}) =>
                                isActive
                                  ? "nav-link active"
                                  : "nav-link"
                            } aria-current="page" to={`/semesters/${semester.id}/courses/${course.course_id}/practice`}>Practice</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink replace className={
                                ({isActive}) =>
                                isActive
                                  ? "nav-link active"
                                  : "nav-link"
                            } to={`/semesters/${semester.id}/courses/${course.course_id}/assignments_list`}>Assignments</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink replace className={
                                ({isActive}) =>
                                isActive
                                  ? "nav-link active"
                                  : "nav-link"
                            } to={`/semesters/${semester.id}/courses/${course.course_id}/members`}>Members</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}