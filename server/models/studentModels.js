import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  userId: String,
  name: String,
  enrollment: String,
  facultyNo: String,
  dob: Date,
  father_name: String,
  mother_name: String,
  yearOfStudy: Number,
  passingYear: Number,
  department: String,
  mainSubject: String,
  hallOfResidence: String,
  hostel: String,
  roomNo: String,
  email: String,
  phoneNo: String,
  guardianPhoneNo: String,
  adhaarNo: String,
  Nationality: String,
  permanentAddress: String,
  correspAddress: String,
  domicileProvince: String,
  avatar: String, // profile pic,
  sign: String,
  thumbImpression: String,
  resume: String,
  experience: String,
  internships: String,
})

export default mongoose.model('Students', studentSchema)

/**
 * Student deatils for form fields/DB schema (Students) at Dashborad
Name (First, middle and last)
Enrolment No.
Faculty No.
Date of birth
Father's Name
Mother's Name
Year of study
Passing year
Faculty/Department/Centre
Course/Main Subject
Hall of Residence
Hostel, Room No.
Email address (personal and institutional )
Mobile No. (WhatsApp one too, also, one additional phone no.)
Guardians Mobile No.
Aadhaar No.
Nationality
Permanent Address
Correspondence Address
Domicile Province
Profile pic
Thumb Impression
Signature
Resume/CV
Past experiences (if any)
Internships/PPO/PPI
 */
