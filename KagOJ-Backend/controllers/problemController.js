const express = require('express');
const router = express.Router()

const CourseRepository = require('../database/courseRepository');
const ProblemRepository = require('../database/problemRepository');

router.get('/:semester_id/:course_id', async (req, res) => {
    const result = await ProblemRepository.fetchAllProblemsBySemesterIdAndCourseId(req.params.semester_id, req.params.course_id);
    res.status(200).send(result.data);
});

router.get('/:semester_id/:course_id/:problem_id', async (req, res) => {
    const result = await ProblemRepository.fetchProblemById(req.params.semester_id, req.params.course_id, req.params.problem_id);
    res.status(200).send(result.data[0]);
});

router.post('/:semester_id/:course_id', async (req, res) => {
    const name = req.body.name;
    const problem_id = req.body.problem_id;
    const course_id = req.body.course_id;
    const semester_id = req.body.semester_id;
    const statement = req.body.statement;
    const input = req.body.input;
    const output = req.body.output;
    const notes = req.body.notes;
    const source_limit = req.body.source_limit;
    const time_limit = req.body.time_limit;
    const memory_limit = req.body.memory_limit;
    const problem = {name: name, problem_id: problem_id, course_id: course_id, semester_id: semester_id, statement: statement, input: input, output: output, 
    notes: notes, source_limit: source_limit, time_limit: time_limit, memory_limit: memory_limit};
    const result = await ProblemRepository.createProblem(problem);
    res.status(200).send(result.data[0]);
});

module.exports = router;