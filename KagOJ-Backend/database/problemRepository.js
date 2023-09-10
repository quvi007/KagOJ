const Repository = require('./connectDB').Repository;

class ProblemRepository extends Repository {
    constructor() {
        super();
    }

    fetchAllProblemsBySemesterIdAndCourseId = async function (semester_id, course_id) {
        const query =   `select * from problem
                        where course_id = $1 and semester_id = $2`;
        const params = [course_id, semester_id];
        const result = await this.query(query, params);
        return result;
    }

    fetchAllProblemsByCourseId = async function(course_id) {
        const query = `select problem.* from problem_course 
        join problem on problem.problem_id = problem_course.problem_id
        where course_id=$1`;
        const params = [course_id];
        const result = await this.query(query, params);
        return result;
    }

    fetchAllProblemsByExamId = async function (exam_id) {
        const query = `select problem.* from problem_exam 
        join problem on problem.problem_id = problem_exam.problem_id
        where exam_id=$1`;
        const params = [exam_id];
        const result = await this.query(query,params);
        return result;
    }

    fetchProblemById = async function (semester_id, course_id, problem_id) {
        const query = `SELECT * FROM problem WHERE semester_id = $1 AND course_id = $2 AND problem_id = $3`;
        const params = [semester_id, course_id, problem_id];
        const result = await this.query(query, params);
        return result;
    }

    createProblem = async function(problem) {
        const query = `INSERT INTO problem (problem_id, course_id, statement, input, output, notes, source_limit, time_limit, memory_limit, name, semester_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning *`;
        const params = [problem.problem_id, problem.course_id, problem.statement, problem.input, problem.output, problem.notes, problem.source_limit, problem.time_limit, problem.memory_limit, problem.name, problem.semester_id];
        const result = await this.query(query, params);
        return result;
    }

    // updateProblemById = async function(semester_id, course_id, problem_id, problem) {
    //     const query = `UPDATE problem SET name = $1, description = $2 WHERE semester_id = $3 AND course_id = $4`;
    //     const params = [course.name, course.description, semester_id, course_id];
    //     const result = await this.query(query, params);
    //     return result;
    // }

    deleteProblemById = async function(semester_id, course_id, problem_id) {
        const query = `DELETE FROM problem WHERE semester_id = $1 AND course_id = $2 AND problem_id = $3`;
        const params = [semester_id, course_id, problem_id];
        const result = await this.query(query, params);
        return result;
    }
}

module.exports = new ProblemRepository();