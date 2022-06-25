const express = require('express');
const router = express.Router();

const { getAllJobs, getJob, createJob, updateJob, deleteJob } =  require('../controller/job');

router.post('/', createJob).get(getAllJobs);
router.get('/:id', getJob).delete(deleteJob).patch(updateJob);

module.exports = router;