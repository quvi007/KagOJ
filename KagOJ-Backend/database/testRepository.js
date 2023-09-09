const Repository = require('./connectDB').Repository;


class TestRepository extends Repository {
    constructor() {
        super();
    }
    getAllByProblemId = async function (problem_id) {
        const query = `select * from test where problem_id=$1`;
        const params = [problem_id];
        const result = await this.query(query,params);
        return result;
    }

    getTestById = async function (test_id) {
        const query = `select * from test where test_id=$1`;
        const params = [test_id];
        const result = await this.query(query,params);
        return result;
    }

    getTestByProblemId = async function (problem_id) {
        const query = `select * from test where problem_id=$1`;
        const params = [problem_id];
        const result = await this.query(query,params);
        return result;
    }

    getTestByProblemIdTestId = async function (problem_id, test_id) {
        const query = `select * from test where problem_id=$1 and test_id=$2`;
        const params = [problem_id, test_id];
        const result = await this.query(query,params);
        return result;
    }


    // ddd test
    addTest = async function (problem_id, type) {
        const query = `insert into test (problem_id,type) values ($1,$2) returning *`;
        const params = [problem_id, type];
        const result = await this.query(query,params);
        return result;
    }

    // update test by test_id and problem_id
    updateTest = async function (problem_id,test_id, type) {
        const query = `update test set type=$3 where test_id=$1 and problem_id=$2 returning *`;
        const params = [test_id, problem_id, type];
        const result = await this.query(query,params);
        return result;
    }
}

module.exports = new TestRepository();