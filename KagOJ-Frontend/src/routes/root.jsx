import { useLoaderData } from "react-router-dom";
import { getAssignments } from "../assignments";

export async function loader() {
    const data = getAssignments("4xkeydq", "akirj27");
    return { data };
}

export default function Root() {
    return <div>Hello</div>;
}