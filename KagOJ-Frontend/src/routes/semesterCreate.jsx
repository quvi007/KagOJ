import { redirect } from "react-router-dom";
import SemesterEditComponent from "../components/semesterEditComponent";
import { assignSemester, createSemester } from "../semesters";

export async function action({ request }) {
    const formData = await request.formData();
    const semester = Object.fromEntries(formData);
    const retSem = await createSemester(semester);
    await assignSemester(retSem.semester_id);
    return redirect(`/semesters/${retSem.semester_id}`);
}

export default function SemesterCreate() {
    return (
        <div>
            <h2 className="mb-4">Create New Semester</h2>
            <SemesterEditComponent semester={{}}/>
        </div>
    );
}
