import { useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateSemester, getSemester } from "../semesters";
import SemesterEditComponent from "../components/semesterEditComponent";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateSemester(params.semesterId, updates);
    return redirect(`/semesters/${params.semesterId}`);
}

export async function loader({ params }) {
  const semester = await getSemester(params.semesterId);
  return { semester };
}

export default function SemesterEdit() {
  const { semester } = useLoaderData();

  return (
    <SemesterEditComponent semester={semester}/>
  );
}
