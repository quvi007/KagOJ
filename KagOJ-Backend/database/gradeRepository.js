
const Repository = require('./connectDB').Repository;


class GradeRepository extends Repository {
    constructor() {
        super();
    }
    getAllByProblemIdExamId = async function (exam_id,problem_id) {
        const query = `select * from grade where problem_id=$1 and exam_id=$2`;
        const params = [problem_id,exam_id];
        const result = await this.query(query,params);
        return result;
    }

    getAllByUserIdExamId = async function (user_id,exam_id) {
        const query = `select * from grade where user_id=$1 and exam_id=$2`;
        const params = [user_id,exam_id];
        const result = await this.query(query,params);
        return result;
    }

    updateGrade = async function (user_id,exam_id,problem_id,marks){
        const query = `update grade set marks = $1 where user_id=$2 and exam_id=$3 and problem_id=$4`;
        const params = [marks,user_id,exam_id,problem_id];
        const result = await this.query(query,params);
        return result;
    }

    createGrades = async function (course_id,exam_id,problem_id) {
        const query = `INSERT INTO grade (user_id,exam_id,problem_id)
                            SELECT user_id, $1 , $2
                            FROM course_assign
                            WHERE course_id = $3
                            on conflict(user_id,exam_id,problem_id) do nothing;`;
        const param = [exam_id,problem_id,course_id]
        const result = await this.query(query,param);
        return result;
    }
}

module.exports = new GradeRepository();









