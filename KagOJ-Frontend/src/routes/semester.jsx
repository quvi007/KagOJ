import { useEffect } from "react";
import { Form, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { getSemester } from "../semesters";
const cookies = new Cookies();
export async function loader({ params }) {
    const semester = await getSemester(params.semesterId);
    return { semester };
}

export default function Semester() {
  const navigate = useNavigate();
  
  useEffect(() => {
    if(cookies.get('name')==undefined || cookies.get('token')==null){
      console.log("Logged out!!!");
      navigate("/login");
      console.log("Logged out!!!");
    }else{
      console.log(cookies.get('name'));
    }
  }, []);
  const { semester } = useLoaderData();

  return (
    <>
    <div id="semester">
      <div>
        <img
          key={semester.avatar}
          src={semester.avatar || null}
        />
      </div>
      <div>
        <h1>
          {semester.name ? (
            <>
              {semester.name}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite semester={semester} />
        </h1>

        <p></p>
        
        {semester.description && <p>{semester.description}</p>}

        <div>
          <Form action="edit">
            <button type="submit" className="btn btn-outline-primary">Edit</button>
          </Form>
          <Form
            method="post"
            action="delete"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this semester."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn btn-outline-danger">Delete</button>
          </Form>
        </div>
      </div>
    </div>
    <div>
    </div>
    <div>
      <Outlet/>
    </div>
  </>
  );
}

function Favorite({ semester }) {
  // yes, this is a `let` for later
  let favorite = semester.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}