const express = require('express');
const router = express.Router()

const examRepository = require('../database/examRepository');

router.get('/running', fetch = async (req, res) => {
    const result = await examRepository.getRunningExamByUserId(req.user.user_id);
    res.status(200).send(result.data);
});

router.get('/running/:course_id', fetch = async (req, res) => {
    const result = await examRepository.getRunningExamByCourseId(req.params.course_id);
    res.status(200).send(result.data);
});

router.get('/past/:course_id', fetch = async (req, res) => {
    const result = await examRepository.getPastExamByCourseId(req.params.course_id);
    res.status(200).send(result.data);
});

router.get('/:exam_id', fetch = async (req, res) => {
    const exam = await examRepository.getExamById(req.params.exam_id);
    const problems = await examRepository.getAllProblemOfExam(req.params.exam_id);
    const result = {
        exam: exam.data[0],
        problems: problems.data
    }
    res.status(200).send(result);
});

router.post('/add', add = async (req, res) => {
    const exam = req.body;
    const result = await examRepository.createExam(exam.course_id, exam.name, exam.start_time, exam.end_time);
    res.status(200).send(result.data[0]);
});
// a json object of exam


router.post('/addProblem', addProblem = async (req, res) => {
    const result = await examRepository.addProblemToExam(req.body.exam_id, req.body.problem_id);
    res.status(200).send(result.data[0]);
});


module.exports = router;