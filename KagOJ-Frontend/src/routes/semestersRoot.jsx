import { NavLink, Outlet, useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Cookies from "universal-cookie";
import Navbar from "../components/Navbar";
import { getSemesters } from "../semesters";
const cookies = new Cookies();

export async function loader() {
  const semesters = await getSemesters();
  return { semesters };
}

export default function SemestersRoot() {
  
  
    const { semesters } = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();
  

    if(cookies.get('name')==undefined || cookies.get('name')==null){
      console.log("Logged outsdfsd!!!");
      
      console.log("Logged out!!!");
    }else{
      console.log(cookies.get('name'));
    }

      console.log("vallage na");
    return (
      <>
        <div id="sidebar">
          <h1>Semesters</h1>
          <div >
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search semesters"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            {/* <Form method="post">
              <button type="submit" className="btn btn-outline-primary">New</button>
            </Form> */}
            <button type="button" className="btn btn-outline-primary" onClick={
              () => {
                navigate("new");
              }
            }>New</button>
          </div>
          <nav>
            {semesters.length ? (
              <ul>
                {semesters.map((semester) => (
                  <li key={semester.semester_id}>
                    <NavLink
                      to={`${semester.semester_id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "active"
                          : isPending
                          ? "pending"
                          : ""
                      }
                    >
                      {semester.name ? (
                        <>
                          {semester.name}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {semester.favorite && <span>★</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No semesters</i>
              </p>
            )}
          </nav>
        </div>
       
        <div id="detail"
          className={navigation.state === "loading" ? "loading" : ""}>
             <Navbar/>
          <Outlet/>
        </div>
      </>
    );
  }