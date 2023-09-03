import { redirect } from "react-router-dom";
import { deleteSemester } from "../semesters";

export async function action({ params }) {
    console.log("Now here!");
    const res = await deleteSemester(params.semesterId);
    return redirect("/semesters");
}