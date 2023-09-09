const express = require('express');
const router = express.Router();

const AssignmentRepository = require('../database/assignmentRepository');

// Get all assignmnents in a course
router.get('/:semester_id/:course_id', async (req, res) => {
    const result = await AssignmentRepository.fetchAllAssignmentsInCourse(req.params.semester_id, req.params.course_id);
    res.status(200).send(result.data);
});

// Get a specific assignment in a course
router.get('/:semester_id/:course_id/:assignment_id', async (req, res) => {
    const result = await AssignmentRepository.fetchAssignmentById(req.params.semester_id, req.params.course_id, req.params.assignment_id);
    res.status(200).send(result.data[0]);
});

// Create an assignment in a course
router.post('/:semester_id/:course_id', async (req, res) => {
    const assignment = {name: req.body.name, statement: req.body.statement,
                        input: req.body.input, output: req.body.output, 
                        time_limit: req.body.time_limit, 
                        source_limit: req.body.source_limit,
                        memory_limit: req.body.memory_limit,
                        notes: req.body.notes, creation_date: req.body.creation_date, 
                        deadline: req.body.deadline};
    const result = await AssignmentRepository.createAssignment(assignment);
    await AssignmentRepository.insertAssignmentInCourse(req.params.semester_id, req.params.course_id, result.data[0].assignment_id);
    res.status(200).send(result.data[0]);
});

// Update an assignment
router.put('/:semester_id/:course_id/:assignment_id', async (req, res) => {
    const assignment = {
                    name: req.body.name, statement: req.body.statement, 
                    input: req.body.input, output: req.body.output, 
                    time_limit: req.body.time_limit, source_limit: req.body.source_limit,
                    memory_limit: req.body.memory_limit, notes: req.body.notes,
                    creation_date: req.body.creation_date, deadline: req.body.deadline
                };
    const result = await AssignmentRepository.updateAssignment(req.params.assignment_id, assignment);
    res.status(200).send(result.data);
});

// Delete an assignment
router.delete('/:semester_id/:course_id/:assignment_id', async (req, res) => {
    const result = await AssignmentRepository.deleteAssignment(req.params.assignment_id);
    res.status(200).send(result.data);
});

module.exports = router;