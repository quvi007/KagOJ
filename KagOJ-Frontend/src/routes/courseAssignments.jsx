import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { getAssignments } from "../assignments";
import { getSemester } from "../semesters";
import { getCourse } from "../courses";
import CourseNavBar from "../components/courseNavBar";
import CourseAssignmentsComponent from "../components/courseAssignmentsComponent";

export async function loader({ params }) {
    const assignments = await getAssignments(params.courseId, params.semesterId);
    const course = await getCourse(params.courseId);
    const semester = await getSemester(params.semesterId);
    return { assignments, course, semester };
}

export default function CourseAssignments() {
    const navigate = useNavigate();
    const { assignments, course, semester } = useLoaderData();
    return (
        <>
            <CourseNavBar course={course} semester={semester} tabName="assignments"/>
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Search..."/>
                    </div>
                    <div className="col">
                    <button type="button" className="btn btn-outline-primary" onClick={
                        () => {
                            navigate(`/semesters/${semester.id}/courses/${course.course_id}/assignments/new`);
                        }
                        }>New</button>
                    </div>
                </div>
            </div>
            <div>
                <CourseAssignmentsComponent assignments={assignments} course={course} semester={semester}/>
            </div>
        </>
    );
}