import StudentModel from '../models/studentModels.js';
import studentSchema from '../schema/student.js';

export const createProfile = async (req, res) => {
  const body = studentSchema.safeParse(req.body);
  if (!body.success)
    return res.status(402).json({
      success: false,
      message: body.error.errors[0].message,
      data: body.error.errors,
    });
  const studentData = body.data;
  const student = new StudentModel({ ...studentData, userId: req.userId });
  await student.save();

  res.status(201).json({
    success: true,
    message: 'Student Profile created',
    data: student,
  });
};

export const allProfiles = async (req, res) => {
  const profiles = await StudentModel.find();
  const count = profiles.length
  res.status(200).json({
    success: true,
    message: count ? `${count} students loaded` : 'No students created',
    data: profiles,
  });
};
export const getProfile = async (req, res) => {
  const { profileId } = req.params;
  const profile = await StudentModel.findById(profileId);

  if (!profile)
    return res
      .status(404)
      .json({ success: false, message: 'Profile not found' });

  res.status(200).json({
    success: true,
    message: 'Student profile loaded',
    data: profile,
  });
};
export const updateProfile = async (req, res) => {
  const { profileId } = req.params;
  const { userId, adminId } = req;
  const body = studentSchema.partial().safeParse(req.body);
  if (!body.success)
    return res.status(402).json({
      success: false,
      message: body.error.errors[0].message,
      data: body.error.errors,
    });
  const studentData = body.data;

  const profile = await StudentModel.findById(profileId);

  if (!profile)
    return res
      .status(404)
      .json({ success: false, message: 'Profile not found' });

  if (!(adminId || userId === profile?.userId))
    return res.status(403).json({
      success: false,
      message: 'You are not authorised to update',
    });

  const updatedProfile = await profile
    .updateOne({
      $set: studentData,
    })
    .catch((e) => {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        data: e.message,
      });
    });

  return res.status(202).json({
    success: true,
    message: 'Student profile updated',
    data: updatedProfile,
  });
};
export const deleteProfile = async (req, res) => {
  const { profileId } = req.params;
  const { adminId } = req;

  const profileToDelete = await StudentModel.findById(profileId);

  if (!profileToDelete)
    return res
      .status(404)
      .json({ success: false, message: 'Profile not found' });

  if (!adminId) {
    return res.status(403).json({
      success: false,
      message: 'You need to be an admin to delete a student profile',
    });
  }
  await profileToDelete.deleteOne();

  return res.status(202).json({
    success: true,
    message: 'Student profile deleted',
    data: profileToDelete,
  });
};
