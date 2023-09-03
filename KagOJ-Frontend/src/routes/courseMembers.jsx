import { useLoaderData } from "react-router-dom";
import CourseNavBar from '../components/courseNavBar';
import { getCourse } from "../courses";
import { getSemester } from "../semesters";

export async function loader( { params} ) {
    const members = [{}];
    const course = await getCourse(params.semesterId, params.courseId);
    const semester = await getSemester(params.semesterId);
    return { members, course, semester };
}

export default function CourseMembers() {
    const { members, course, semester } = useLoaderData();
    return (
        <>
            <CourseNavBar course={course} semester={semester} tabName="members"/>
            <div>
                <h2>Members</h2>
            </div>
        </>
    );
}