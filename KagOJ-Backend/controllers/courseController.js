const express = require('express');
const router = express.Router();

const CourseRepository = require('../database/courseRepository');

router.get('/:semester_id/:course_id', async (req, res) => {
    const user = req.user;
    const course = await CourseRepository.fetchCourseById(user.user_id, req.params.semester_id, req.params.course_id);
    const problems = await CourseRepository.getProblems(req.params.course_id);
    const result = { course: course.data[0], problems: problems.data };
    console.log(result);
    res.status(200).send(result);
});

router.get('/:semester_id', async (req, res) => {
    const user = req.user;
    const result = await CourseRepository.fetchAllCoursesByUserAndSemesterId(user.user_id, req.params.semester_id);
    res.status(200).send(result.data);
});

// new routes for problems
router.post('/addProblem', async (req, res) => {
    const course_id = req.body.course_id;
    const problem_id = req.body.problem_id;
    const result = await CourseRepository.addProblem(course_id, problem_id);
    res.status(200).send(result.data);
});

router.post('/:semester_id/:course_id/assign', async (req, res) => {
    const user = req.user;
    const result = await CourseRepository.assignCourse(user.user_id, req.params.semester_id, req.params.course_id);
    res.status(200).send(result.data);
});

router.post('/:semester_id', async (req, res) => {
    const course = { course_id: req.body.course_id, name: req.body.name, description: req.body.description, semester_id: req.params.semester_id }
    const result = await CourseRepository.createCourse(course);
    res.status(200).send(result.data);
});

router.put('/:semester_id/:course_id', async (req, res) => {
    const course = { name: req.body.name, description: req.body.description };
    const result = await CourseRepository.updateCourseById(req.params.semester_id, req.params.course_id, course);
    res.status(200).send(result.data);
});

router.delete('/:semester_id/:course_id', async (req, res) => {
    const result = await CourseRepository.deleteCourseById(req.params.semester_id, req.params.course_id);
    res.status(200).send(result.data);
});




module.exports = router;