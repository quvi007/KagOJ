const express = require('express');
const router = express.Router()

const SemesterRepository = require('../database/semesterRepository');

router.get('/', fetch = async (req, res) => {
    const user = req.user;
    const result = await SemesterRepository.fetchAllSemestersByUser(user.user_id);
    res.status(200).send(result.data);
});

router.get('/:semester_id', async (req, res) => {
    const user = req.user;
    const result = await SemesterRepository.fetchSemesterById(user.user_id, req.params.semester_id);
    res.status(200).send(result.data);
});

router.post('/', async (req, res) => {
    const semester = { semester_id: req.body.semester_id, name: req.body.name, description: req.body.description, avatar: req.body.avatar }
    const result = await SemesterRepository.createSemester(semester);
    res.status(200).send(result.data);
});

router.post('/:semester_id/assign', async (req, res) => {
    const user = req.user;
    const result = await SemesterRepository.assignSemester(user.user_id, req.params.semester_id);
    res.status(200).send(result.data);
});

router.put('/:semester_id', async (req, res) => {
    const semester = { name: req.body.name, description: req.body.description, avatar: req.body.avatar};
    const result = await SemesterRepository.updateSemesterById(req.params.semester_id, semester);
    res.status(200).send(result.data);
});

router.delete('/:semester_id', async (req, res) => {
    const result = await SemesterRepository.deleteSemesterById(req.params.semester_id);
    res.status(200).send(result.data);
})

module.exports = router;