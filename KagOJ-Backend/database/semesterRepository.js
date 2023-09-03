const Repository = require('./connectDB').Repository;


class SemesterRepository extends Repository {
    constructor() {
        super();
    }

    fetchAllSemestersByUser = async function (user_id) {
        const query =   `select * from semester
                        join semester_assign on semester.semester_id = semester_assign.semester_id
                        where semester_assign.user_id = $1`;
        const params = [user_id];
        const result = await this.query(query, params);
        return result;
    }

    fetchAllSemesters = async function () {
        const query =   `SELECT * FROM semester`;
        const result = await this.query(query);
        return result;
    }

    fetchSemesterById = async function(user_id, semester_id) {
        console.log(user_id);
        const query = `select * from semester
                        join semester_assign on semester.semester_id = semester_assign.semester_id
                        where semester_assign.user_id = $1 and semester_assign.semester_id = $2`;
        const params = [user_id, semester_id];
        const result = await this.query(query, params);
        return result;
    }

    createSemester = async function(semester) {
        const query = `INSERT INTO semester (semester_id, name, description, avatar) VALUES ($1, $2, $3, $4) returning *`;
        const params = [semester.semester_id, semester.name, semester.description, semester.avatar];
        const result = await this.query(query, params);
        return result;
    }

    assignSemester = async function(user_id, semester_id) {
        console.log("Here");
        const query = `INSERT INTO semester_assign (user_id, semester_id) VALUES ($1, $2)`;
        const params = [user_id, semester_id];
        const result = await this.query(query, params);
        return result;
    }

    updateSemesterById = async function(semester_id, semester) {
        const query = `UPDATE semester SET name = $1, description = $2, avatar = $3 WHERE semester_id = $4`;
        const params = [semester.name, semester.description, semester.avatar, semester_id];
        const result = await this.query(query, params);
        return result;
    }

    deleteSemesterById = async function(semester_id) {
        const query = `DELETE FROM semester WHERE semester_id = $1`;
        const params = [semester_id];
        const result = await this.query(query, params);
        return result;
    }
}

module.exports = new SemesterRepository;