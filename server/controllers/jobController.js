import JobModel from '../models/jobModels.js';
import jobSchema from '../schema/job.js';
export const createJob = async (req, res, next) => {
  if (!req.adminId)
    return res.status(403).json({
      success: false,
      message: 'You need to be an admin to create the job',
    });

  const body = jobSchema.safeParse(req.body);

  if (!body.success)
    return res.status(402).json({
      success: false,
      message: body.error.errors[0].message,
      data: body.error.errors,
    });
  const {
    companyName,
    applyStart,
    applyEnd,
    location,
    logoLink,
    jobLink,
    applyLink,
    type,
    details,
    companyContact,
    ctc,
  } = body.data;

  const job = new JobModel({
    companyName,
    applyStart,
    applyEnd,
    location,
    logoLink,
    jobLink,
    applyLink,
    type,
    details,
    companyContact,
    ctc,
    createdBy: req.userId,
  });
  await job.save();

  res.status(201).json({
    success: true,
    message: 'Job application created successfully',
    data: job,
  });
};

// TODO pagination
export const viewJobs = async (req, res, next) => {
  const jobs = await JobModel.find();

  res.status(200).json({
    success: true,
    message: 'New jobs are created!',
    data: jobs,
  });
};

export const applyForJob = async (req, res, next) => {
  const { jobId } = req.params;
  const { userId } = req;

  const application = await JobModel.findByIdAndUpdate(jobId, {
    $push: {
      appliedUsers: userId,
    },
  }).catch((e) =>
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      data: e.message,
    })
  );
  if (!application)
    return res.status(404).json({ success: false, message: 'Job not found' });

  res.send({
    success: true,
    message: 'You applied for the job !',
    data: application,
  });
};

export const getJob = async (req, res, next) => {
  const { jobId } = req.params;
  const job = await JobModel.findById(jobId);

  if (!job)
    return res.status(404).json({ success: false, message: 'Job not found' });

  res.status(200).json({
    success: true,
    message: 'New jobs are created!',
    data: job,
  });
};
export const updateJob = async (req, res, next) => {
  if (!req.adminId)
    return res.status(403).json({
      success: false,
      message: 'You need to be an admin to update the job',
    });

  const body = jobSchema.partial().safeParse(req.body);
  if (!body.success)
    return res.status(402).json({
      success: false,
      message: body.error.errors[0].message,
      data: body.error.errors,
    });
  const {
    companyName = undefined,
    applyStart = undefined,
    applyEnd = undefined,
    location = undefined,
    logoLink = undefined,
    jobLink = undefined,
    applyLink = undefined,
    type = undefined,
    details = undefined,
    companyContact = undefined,
    ctc = undefined,
  } = body.data;

  const job = await JobModel.findById(req.params.jobId);
  if (!job)
    return res.status(404).json({
      success: false,
      message: 'Job not found',
    });

  const updatedJob = await job.updateOne({
    $set: {
      companyName,
      applyStart,
      applyEnd,
      location,
      logoLink,
      jobLink,
      applyLink,
      type,
      details,
      companyContact,
      ctc,
    },
  });
  return res.status(204).json({
    success: true,
    message: 'Job updated succesfully!',
    data: updatedJob,
  });
};

export const deleteJob = async (req, res, next) => {
  if (!req.adminId)
    return res.status(403).json({
      success: false,
      message: 'You need to be an admin to delete the job',
    });

  const job = await JobModel.findById(req.params.jobId);

  if (!job)
    return res.status(404).json({ success: false, message: 'Job not found' });

  const deletedJob = await job.deleteOne();

  return res.status(202).json({
    success: true,
    message: 'Job deleted succesfully',
    data: deletedJob,
  });
};
