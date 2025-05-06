const express = require("express");
const JobsControllers = require("../controller/Jobs.controller")

const router = express.Router();

router.get("/get-jobs", JobsControllers.RetrieveJobs);
router.get("/search",JobsControllers.searchJobsBasedLocation)

module.exports = router;