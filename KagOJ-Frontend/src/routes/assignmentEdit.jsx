import { redirect, useLoaderData } from "react-router-dom";
import { getAssignment, updateAssignment } from "../assignments";
import { getCourse } from "../courses";
import { getSemester } from "../semesters";
import AssignmentEditComponent from "../components/assignmentEditComponent";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateAssignment(params.assignmentId, params.courseId, params.semesterId, updates);
    return redirect(`/semesters/${params.semesterId}/courses/${params.courseId}/assignments/${params.assignmentId}`);
}

export async function loader({ params }) {
  const assignment = await getAssignment(params.assignmentId);
  const course = await getCourse(params.courseId);
  const semester = await getSemester(params.semesterId);
  return { assignment, course, semester };
}

export default function AssignmentEdit() {
  const { assignment, course, semester } = useLoaderData();

  return (
    <AssignmentEditComponent assignment={assignment} course={course} semester={semester}/>
  );
}
