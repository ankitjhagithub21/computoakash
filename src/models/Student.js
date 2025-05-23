import mongoose from "mongoose";
import bcrypt from "bcrypt"

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  fatherName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim:true
  },
  password: {
    type: String,
    required: true,
    
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10,15}$/, 'Phone number must be valid.']
  },
  age: {
    type: Number,
    required: true,
    min: [5, 'Too young'],
    max: [100, 'Too old']
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  }
}, {
  timestamps: true
});

// Pre-save hook to hash password
studentSchema.pre('save', async function (next) {
  const student = this;

  // Only hash the password if it has been modified (or is new)
  if (!student.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    student.password = await bcrypt.hash(student.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.models.Student || mongoose.model('Student', studentSchema);