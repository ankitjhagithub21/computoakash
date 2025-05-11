import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import dbConnect from '@/lib/dbConnect';
import Student from '@/models/Student';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
  const cookieStore = cookies(); 

  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    await dbConnect();

    const student = await Student.findOne({ email });
    if (!student) {
      return NextResponse.json({ message: 'Student not found.' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Wrong email or password.' }, { status: 401 });
    }

    const token = jwt.sign({ id: student._id, email: student.email }, JWT_SECRET, {
      expiresIn: '7d',
    });

    cookieStore.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({ message: 'Login successful',student:{
      _id:student._id,
      name:student.name,
      fatherName:student.fatherName,
      email:student.email,
      age:student.age,
      gender:student.gender,
      phone:student.phone
    } }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
