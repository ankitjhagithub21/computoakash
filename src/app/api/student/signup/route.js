// app/api/student/signup/route.js

import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Student from '@/models/Student'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, fatherName, email, password, phone, age, gender } = body

    // Validate required fields
    if (!name || !fatherName || !email || !password || !phone || !age || !gender) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
    }

    // Connect to DB
    await dbConnect()

    // Check if student already exists
    const existingStudent = await Student.findOne({ email })
    if (existingStudent) {
      return NextResponse.json({ message: 'Email already registered' }, { status: 409 })
    }

    // Create new student (password hashing is handled by schema hook)
    const student = new Student({ name, fatherName, email, password, phone, age, gender })
    await student.save()

    return NextResponse.json({ message: 'Signup successful' }, { status: 201 })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
