const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  Job_id: {
     type: String, 
     required: true, 
     unique: true 
    },
  title: { 
    type: String, 
    required: true 
  },
  company: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  job_link: { 
    type: String, 
    required: true 
  },
  employment_type: {
     type: String, 
     required: true
     },
  experience: { 
    type: String, 
    required: true 
  },
  source: { 
    type: String,
     required: true
     },
  country: {
     type: String, 
     required: true 
    },
  postedDateTime: { 
    date: {
      type: Date, 
      required: true 
    }
  },
  companyImageUrl: { 
    type: String
   },
  min_exp: { 
    type: Number 
  },
  max_exp: {
     type: Number 
    },
},{timestamps: true});

module.exports = mongoose.model("jobs", JobSchema);
