import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Student from '@/models/Student';
import bcrypt from "bcrypt"

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    await dbConnect();
   
    const student = await Student.findOne({email})
    if(!student){
      return NextResponse.json({ message: 'Student not found.' }, { status: 404 });
    }
    const isMatch = await bcrypt.compare(password,student.password);

    if(!isMatch){
      return NextResponse.json({ message: 'Wrong email or password.' }, { status: 404 }); 
    }

    return NextResponse.json({ message: 'Login successfully' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
