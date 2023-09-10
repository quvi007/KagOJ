const Repository = require('./connectDB').Repository;


class ExamRepository extends Repository {
    constructor() {
        super();
    }

    // get exam by exam_id
    getExamById = async function (exam_id) {
        const query = `select * from exam where exam_id=$1`;
        const params = [exam_id];
        const result = await this.query(query,params);
        return result;
    }

    // get exam by user_id


    // get exam by course_id
    getAllExamByCourseId = async function (course_id) {
        const query = `select * from exam where course_id=$1`;
        const params = [course_id];
        const result = await this.query(query,params);
        return result;
    }

    // get running exam by course_id
    getRunningExamByCourseId = async function (course_id) {
        const query = `select * from exam where course_id=$1 and end_time>=NOW()`;
        const params = [course_id];
        const result = await this.query(query,params);
        return result;
    }

    // get past exam by course_id
    getPastExamByCourseId = async function (course_id) {
        const query = `select * from exam where course_id=$1 and end_time<NOW()`;
        const params = [course_id];
        const result = await this.query(query,params);
        return result;
    }

    // get upcoming exam by user_id
    getRunningExamByUserId = async function (user_id) {
        const query = `select exam.*,course.name as course_name from exam 
        join course on exam.course_id = course.course_id
        join course_assign on course_assign.course_id = course.course_id
        where course_assign.user_id = $1 and end_time>=NOW();`;
        const params = [user_id];
        const result = await this.query(query,params);
        return result;
    }

    // add problem to exam
    addProblemToExam = async function (exam_id, problem_id) {
        const query = `insert into problem_exam (exam_id,problem_id) values ($1,$2) returning *`;
        const params = [exam_id, problem_id];
        const result = await this.query(query,params);
        return result;
    }

    //get all problem of exam
    getAllProblemOfExam = async function (exam_id) {
        const query = `select problem_exam.*,problem.name from problem_exam 
        join problem on problem.problem_id = problem_exam.problem_id
        where exam_id=$1`;
        const params = [exam_id];
        const result = await this.query(query,params);
        return result;
    }

    // create exam
    createExam = async function (course_id, name, start_time, end_time) {
        const query = `insert into exam (course_id,name,start_time,end_time) values ($1,$2,$3,$4) returning *`;
        const params = [course_id, name, start_time, end_time];
        const result = await this.query(query,params);
        return result;
    }


    /*
    insert into exam(course_id,name,start_time,end_time)
values(1,'First Test Online',TIMESTAMP '2023-10-08 00:00:01',TIMESTAMP '2023-10-10 10:10:10')
*/
/*
select * from exam where end_time>=LOCALTIMESTAMP(2)
*/
/*
select exam.name,exam.end_time at time zone 'Asia/Dhaka',NOW() at time zone 'Asia/Dhaka',end_time-NOW(),NOW()-end_time from exam
where end_time>=NOW()
*/

}

module.exports = new ExamRepository();