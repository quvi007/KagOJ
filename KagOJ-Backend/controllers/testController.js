const express = require('express');
const router = express.Router()
const fs = require('fs');

const testRepository = require('../database/testRepository');

router.get('/:problem_id', getAllByProblemId = async (req, res) => {
    const problem_id = req.params.problem_id;
    const result = await testRepository.getAllByProblemId(problem_id);
    res.status(200).send(result.data);
});

// get specific test
router.get('/:problem_id/:test_id', getTestByProblemIdTestId = async (req, res) => {
    const problem_id = req.params.problem_id;
    const test_id = req.params.test_id;
    const result = await testRepository.getTestByProblemIdTestId(problem_id, test_id);
    res.status(200).send(result.data);
});

// add test
router.post('/add', addTest = async (req, res) => {
    console.log("in add test");
    
    const problem_id = req.body.problem_id;
    const test = { input: req.body.input, output: req.body.output };
    const type = req.body.type;
    const result = await testRepository.addTest(problem_id, type);
    // save input and output to file
    // save input to file
    if (result.data.length === 0) {
        res.status(404).send({ message: 'Test not found' });
        return;
    }
    const test_id = result.data[0].test_id;
    // save input and output to file
    // save input to file
    try {
        fs.writeFileSync(`file/input/${test_id}.in`, test.input);
        console.log('Input written successfully');
        // file written successfully
    } catch (err) {
        console.error(err);
    }
    try {
        fs.writeFileSync(`file/output/${test_id}.out`, test.output);
        console.log('Output written successfully');
        // file written successfully
    } catch (err) {
        console.error(err);
    }
    // save output to file
    res.sendStatus(200);
});

// a test json object

// update test
router.post('/update', updateTest = async (req, res) => {
    console.log("in update test");
    
    // check if test exists
    const problem_id = req.body.problem_id;
    const test_id = req.body.test_id;
    const test = { input: req.body.input, output: req.body.output };
    const type = req.body.type;
    const result = await testRepository.updateTest(problem_id, test_id,type);
    if (result.data.length === 0) {
        res.status(404).send({ message: 'Test not found' });
        return;
    }
   
    // save input and output to file
    // save input to file
    try {
        fs.writeFileSync(`file/input/${test_id}.in`, test.input);
        console.log('Input written successfully');
        // file written successfully
    } catch (err) {
        console.error(err);
    }
    try {
        fs.writeFileSync(`file/output/${test_id}.out`, test.output);
        console.log('Output written successfully');
        // file written successfully
    } catch (err) {
        console.error(err);
    }
    // save output to file
    res.sendStatus(200);


});


module.exports = router;