import { NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect"
import Student from "@/models/Student";

export async function GET() {
    try {
        await dbConnect()
        const users = await Student.find().select("-password");
        return NextResponse.json({users},{status:200})
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 })
    }
}
