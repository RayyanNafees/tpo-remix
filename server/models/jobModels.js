import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema(
  { 
    createdBy: String,
    companyName: String,
    companyContact: { type: String, default: '' },
    applyStart: String,
    applyEnd: String,
    batchYears: String,
    branch: String,
    logoLink: String,
    jobLink: String,
    applyLink: String,
    ctc: String,
    location: String,
    type: String,
    details: String,
    appliedUsers: { type: Array, default: [] },
    closed: Boolean,
  },
  { timestamps: true }
)

export default mongoose.model('Jobs', jobSchema)
