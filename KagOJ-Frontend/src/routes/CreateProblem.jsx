import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { createProblem } from '../problems';

export async function action({request, params}) {
    const formData = await request.formData();
    const problem = Object.fromEntries(formData);
    const retProblem = await createProblem(params.semesterId, params.courseId, problem);
    return redirect(`/semesters/${params.semesterId}/courses/${params.courseId}`);
}

export default function CreateProblem() {
  const problem = {
    name: '',
    statement: '',
    input: '',
    output: '',
    time_limit: '',
    memory_limit: '',
    notes: '',
    source_limit: ''
  }
  return (
    <Container>
      <h1>Create Problem</h1>
      <Form method="POST">
        <Form.Group controlId="problemTitle">
          <Form.Label>Problem Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={problem.name}
            required
          />
        </Form.Group>

        <Form.Group controlId="problemBody">
          <Form.Label>Problem Statement</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="statement"
            value={problem.statement}
            required
          />
        </Form.Group>

        <Form.Group controlId="inputDescription">
          <Form.Label>Input Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="inputDescription"
            value={problem.input}
            required
          />
        </Form.Group>

        <Form.Group controlId="outputDescription">
          <Form.Label>Output Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="outputDescription"
            value={problem.output}
            required
          />
        </Form.Group>

        <Form.Group controlId="notes">
          <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="notes"
              value={problem.notes}
              required
            />
        </Form.Group>

        <Form.Group controlId="problemTimeLimit">
          <Form.Label>Time Limit (ms)</Form.Label>
          <Form.Control
            type="text"
            name="time_limit"
            value={problem.time_limit}
            required
          />
        </Form.Group>

        <Form.Group controlId="problemSourceLimit">
          <Form.Label>Source Limit (ms)</Form.Label>
          <Form.Control
            type="text"
            name="source_limit"
            value={problem.source_limit}
            required
          />
        </Form.Group>

        <Form.Group controlId="problemMemoryLimit">
          <Form.Label>Memory Limit (MB)</Form.Label>
          <Form.Control
            type="text"
            name="memory_limit"
            value={problem.memory_limit}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};