import { redirect, useLoaderData } from "react-router-dom";
import CourseEditComponent from "../components/courseEditComponent";
import { assignCourse, createCourse } from "../courses";
import { getSemester } from "../semesters";

export async function action({ request, params }) {
    const formData = await request.formData();
    const course = Object.fromEntries(formData);
    const retCrs = await createCourse(params.semesterId, course);
    await assignCourse(params.semesterId, retCrs.course_id);
    return redirect(`/semesters/${params.semesterId}`);
}

export async function loader( {params} ) {
    const semester = await getSemester(params.semesterId);
    return { semester };
}

export default function CourseCreate() {
    const { semester } = useLoaderData();
    return (
        <div>
            <h2 className="mb-4">Create New Course for {semester.name}</h2>
            <CourseEditComponent course={{}}/>
        </div>
    );
}
