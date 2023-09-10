const Repository = require('./connectDB').Repository;

class CourseRepository extends Repository {
    constructor() {
        super();
    }

    fetchAllCoursesByUserAndSemesterId = async function (user_id, semester_id) {
        const query =   `select * from course
                        join course_assign on course.semester_id = course_assign.semester_id and course.course_id = course_assign.course_id
                        where course_assign.user_id = $1 and course_assign.semester_id = $2`;
        const params = [user_id, semester_id];
        const result = await this.query(query, params);
        return result;
    }

    fetchCourseById = async function(user_id, semester_id, course_id) {
        const query = `select * from course
                        join course_assign on course.semester_id = course_assign.semester_id and course.course_id = course_assign.course_id
                        where course_assign.user_id = $1 and course_assign.semester_id = $2 and course_assign.course_id = $3`;
        const params = [user_id, semester_id, course_id];
        const result = await this.query(query, params);
        return result;
    }

    createCourse = async function(course) {
        const query = `INSERT INTO course (course_id, name, description, semester_id) VALUES ($1, $2, $3, $4) returning *`;
        const params = [course.course_id, course.name, course.description, course.semester_id];
        const result = await this.query(query, params);
        return result;
    }

    assignCourse = async function(user_id, semester_id, course_id) {
        const query = `INSERT INTO course_assign (user_id, semester_id, course_id) VALUES ($1, $2, $3)`;
        const params = [user_id, semester_id, course_id];
        const result = await this.query(query, params);
        return result;
    }

    updateCourseById = async function(semester_id, course_id, course) {
        const query = `UPDATE course SET name = $1, description = $2 WHERE semester_id = $3 AND course_id = $4`;
        const params = [course.name, course.description, semester_id, course_id];
        const result = await this.query(query, params);
        return result;
    }

    deleteCourseById = async function(semester_id, course_id) {
        const query = `DELETE FROM course WHERE semester_id = $1 AND course_id = $2`;
        const params = [semester_id, course_id];
        const result = await this.query(query, params);
        return result;
    }

    // new queries for problems
    // add problem to course
    addProblem = async function(course_id, problem_id) {
        const query = `INSERT INTO problem_course (course_id, problem_id) VALUES ($1, $2) returning *`;
        const params = [course_id, problem_id];
        const result = await this.query(query, params);
        return result;
    }

    // get all problems of a course
    getProblems = async function(course_id) {
        const query = `select problem_course.*,problem.name from problem_course 
        join problem on problem.problem_id = problem_course.problem_id
        where problem_course.course_id=$1`;
        const params = [course_id];
        const result = await this.query(query, params);
        return result;
    }
}

module.exports = new CourseRepository();