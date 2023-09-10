const express = require('express');
const router = express.Router()


const gradeRepository = require('../database/gradeRepository');




router.get('/:exam_id/:user_id', fetch = async (req, res) => {
    const result = await gradeRepository.getAllByUserIdExamId(req.params.user_id,req.params.exam_id);
    res.status(200).send(result.data);
});

router.put('/', fetch = async (req, res) => {
    const result = await gradeRepository.updateGrade(req.body.user_id,req.body.exam_id,req.body.problem_id,req.body.marks);
    res.status(200).send(result.data);
});

// a grade json object




module.exports = router;