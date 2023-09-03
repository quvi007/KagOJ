import { useLoaderData, useNavigate } from "react-router-dom";
import CourseNavBar from "../components/courseNavBar";
import { getCourse } from "../courses";
import { getSemester } from "../semesters";
import PracticeProblems from "../components/practiceProblems";
import { getProblems } from "../problems";

export async function loader({ params }) {
    const practiceProblems = await getProblems(params.semesterId, params.courseId);
    const course = await getCourse(params.semesterId, params.courseId);
    const semester = await getSemester(params.semesterId);
    return { practiceProblems, course, semester };
}

export default function CoursePractice() {
    const navigate = useNavigate();
    const { practiceProblems, course, semester } = useLoaderData();
    return (
        <>
            <CourseNavBar course={course} semester={semester} tabName="practice"/>
            <div>
                <div>
                    <div className="row">
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Search..."/>
                        </div>
                        <div className="col">
                        <button type="button" className="btn btn-outline-primary" onClick={
                            () => {
                                navigate("new");
                            }
                            }>New</button>
                        </div>
                    </div>
                </div>
                <PracticeProblems/>
            </div>
        </>
    );
}