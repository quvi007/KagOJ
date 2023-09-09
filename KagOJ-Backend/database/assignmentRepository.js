// assignment(assignment_id, name, statement, input, output, time_limit, source_limit, memory_limit, notes)
const Repository = require('./connectDB').Repository;

class AssignmentRepository extends Repository {
    constructor() {
        super();
    }

    fetchAllAssignmentsInCourse = async function (semester_id, course_id) {
        const query =   `SELECT * FROM assignment
                            JOIN assignment_course
                            ON assignment.assignment_id = assignment_course.assignment_id
                            WHERE assignment_course.semester_id = $1
                            AND assignment_course.course_id = $2`;
        const params = [semester_id, course_id];
        const result = await this.query(query, params);

        return result;
    }

    fetchPastAssignmentsInCourse = async function (semester_id, course_id) {
        const query =   `SELECT * FROM assignment
                            JOIN assignment_course
                            ON assignment.assignment_id = assignment_course.assignment_id
                            WHERE assignment_course.semester_id = $1
                            AND assignment_course.course_id = $2
                            AND assignment.deadline < CURRENT_TIMESTAMP`;
        const params = [semester_id, course_id];
        const result = await this.query(query, params);
        return result;
    }

    fetchActiveAssignmentsInCourse = async function (semester_id, course_id) {
        const query =   `SELECT * FROM assignment
                            JOIN assignment_course
                            ON assignment.assignment_id = assignment_course.assignment_id
                            WHERE assignment_course.semester_id = $1
                            AND assignment_course.course_id = $2
                            AND assignment.deadline > CURRENT_TIMESTAMP`;
        const params = [semester_id, course_id];
        const result = await this.query(query, params);
        return result;
    }

    fetchAssignmentById = async function (semester_id, course_id, problem_id) {
        const query =   `SELECT * FROM assignment
                            JOIN assignment_course
                            ON assignment.assignment_id = assignment_course.assignment_id
                            WHERE assignment_course.semester_id = $1
                            AND assignment_course.course_id = $2
                            AND assignment.assignment_id = $3`;
        const params = [semester_id, course_id, problem_id];
        const result = await this.query(query, params);
        return result;
    }

    createAssignment = async function(assignment) {
        const query = `INSERT INTO assignment(name, statement, input, output, time_limit, source_limit, memory_limit, notes, creation_date, deadline)
                        VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
        const params = [assignment.name, assignment.statement, 
                        assignment.input, assignment.output, 
                        assignment.time_limit, assignment.source_limit,
                        assignment.memory_limit, assignment.notes,
                        assignment.creation_date, assignment.deadline
                        ];
        const result = await this.query(query, params);
        return result;
    }

    updateAssignment = async function(assignment_id, assignment) {
        const query = `UPDATE assignment SET
                        name = $1, statement = $2,
                        input = $3, output = $4,
                        time_limit = $5, source_limit = $6,
                        memory_limit = $7, notes = $8,
                        creation_date = $9, deadline = $10
                        WHERE assignment_id = $11`;
        const params = [assignment.name, assignment.statement,
                        assignment.input, assignment.output,
                        assignment.time_limit, assignment.source_limit,
                        assignment.memory_limit, assignment.notes,
                        assignment.creation_date, assignment.deadline,
                        assignment_id];
        const result = await this.query(query, params);
        return result;
    }

    deleteAssignment = async function(assignment_id) {
        const query = `DELETE FROM assignment WHERE assignment_id = $1`;
        const params = [assignment_id];
        const result = await this.query(query, params);
        return result;
    }

    insertAssignmentInCourse = async function(semester_id, course_id, assignment_id) {
        const query = `INSERT INTO assignment_course(assignment_id, course_id, semester_id)
                            VALUES ($1, $2, $3) RETURNING *`;
        const params = [assignment_id, course_id, semester_id];
        const result = await this.query(query, params);
        return result;
    }
}

module.exports = new AssignmentRepository();