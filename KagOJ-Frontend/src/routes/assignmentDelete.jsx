import { redirect } from "react-router-dom";
import { deleteAssignment } from "../assignments";

export async function action({ params }) {
    const res = await deleteAssignment(params.assignmentId);
    return redirect(`/semesters/${params.semesterId}/courses/${params.courseId}/assignments`);
}