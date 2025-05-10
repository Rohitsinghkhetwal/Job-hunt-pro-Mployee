const Jobs = require("../model/Job.model.js");

exports.RetrieveJobs = async(req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  try {
    const skip = (page - 1) * limit;
    const jobs = await Jobs.find()
    .skip(skip)
    .limit(limit);

    res.status(200).json({
      status: "success",
      data: jobs
    })

  }catch(err) {
    res.status(500).json({message: "Something went wrong while fetching the jobs"})
  }
}

exports.searchJobsBasedLocation = async(req, res) => {
  const {location="", page=1, limit=20 } = req.query;
  try {
    const currentPage = parseInt(page, 10);
    const itemsPerPage = parseInt(limit, 10);
    const escapedLocation = location.trim().replace(/\s+/g, '\\s+')

    
    const query = {
      location: {$regex: escapedLocation, $options: "i"} // we are doing case sensitive search here !
    }
    const totalCount = await Jobs.countDocuments(query);
    const jobs = await Jobs.find(query)
    .skip((currentPage -1) * itemsPerPage)
    .limit(Number(itemsPerPage));


    res.status(200).json({
      message: "Job searching success !",
      numberOfJobs: totalCount,
      data: jobs,
      
    })

  }catch(err) {
    console.log("this is the error", err);
    res.status(500).json({message: "Server error !"})
  }
}