import { redirect, useLoaderData } from "react-router-dom";
import { getCourse } from "../courses";
import { getSemester } from "../semesters";
import { createAssignment } from "../assignments";
import AssignmentEditComponent from "../components/assignmentEditComponent";

export async function action({ request, params }) {
    const formData = await request.formData();
    const assignment = Object.fromEntries(formData);
    const retAss = await createAssignment(assignment, params.courseId, params.semesterId);
    return redirect(`/semesters/${params.semesterId}/courses/${params.courseId}/assignments_list`);
}

export async function loader( {params} ) {
    const semester = await getSemester(params.semesterId);
    const course = await getCourse(params.semesterId, params.courseId);
    return { semester, course };
}

export default function AssignmentCreate() {
    const { semester, course } = useLoaderData();
    return (
        <div>
            <h2 className="mb-4">Create New Assignment for {course.name}, {semester.name}</h2>
            <AssignmentEditComponent assignment={{}} course={{}} semester={{}}/>
        </div>
    );
}
