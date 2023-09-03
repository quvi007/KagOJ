import { Link, useLoaderData, useNavigate } from "react-router-dom";

export default function CoursesGrid() {
    const { courses } = useLoaderData();
    const navigate = useNavigate();
    return (
        <div>
            <h2 className="mt-4">Courses</h2>
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Search..."/>
                    </div>
                    <div className="col">
                    <button type="button" className="btn btn-outline-primary" onClick={
                        () => {
                            navigate("courses/new");
                        }
                        }>New</button>
                    </div>
                </div>
            </div>
            <div className="row mt-3 row-cols-4">
                {courses.length ? 
                (
                    <>
                        {courses.map((course) => (
                            <div className="col mt-3" key={course.course_id}>
                                <div className="card">
                                    <img src="/spl.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{course.name}</h5>
                                        <p className="card-text">{course.description}</p>
                                        <Link to={`courses/${course.course_id}`} className="btn btn-primary">Visit Course</Link>
                                        <Link to={`courses/${course.course_id}/edit`} className="m-2 btn btn-outline-primary">Edit</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : 
                (
                <i>No Courses</i>
                )
                }
            </div>
        </div>
    )
}