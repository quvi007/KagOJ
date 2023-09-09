const Queue = require('bull');
const REDIS_URL = 'redis://127.0.0.1:6379';

const taskQueue = new Queue('tasks', REDIS_URL);

module.exports = taskQueue;