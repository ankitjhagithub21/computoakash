import { NextResponse } from "next/server"
import Course from "@/models/Course"
import dbConnect from "@/lib/dbConnect"

export async function GET() {
    try {
        await dbConnect()
        const courses = await Course.find();
        return NextResponse.json({courses},{status:200})
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 })
    }
}


export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();

        const { title, desc, image } = body;

        if (!title || !desc || !image) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        const newCourse = await Course.create({ title, desc, image });

        return NextResponse.json({ course: newCourse }, { status: 201 });

    } catch (error) {
        console.error("Error creating course:", error);
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );
    }
}

