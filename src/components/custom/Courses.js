'use client'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import CourseSkeleton from "./CourseSkeleton";


const Courses = () => {
    const courses = [
        {
            id:1,
            title:"Diploma in Computer Application",
            image:"/c1.jpeg"
        },
         {
            id:2,
            title:"Advanced Diploma in Computer Application",
            image:"/c2.jpeg"
        },
         {
            id:3,
            title:"Certificate in Computer Application",
            image:"/c3.jpeg"
        },
         {
            id:4,
            title:"Computer Teachers Training Course",
            image:"/c4.jpeg"
        },
         {
            id:5,
            title:"Diploma in Computer Application",
            image:"/c5.jpeg"
        },
         {
            id:6,
            title:"Desktop Publishing",
            image:"/c6.jpeg"
        },
         {
            id:7,
            title:"Diploma in Desktop Publishing",
            image:"/c7.jpeg"
        },
         {
            id:8,
            title:"Diploma in Hardware Technology",
            image:"/c8.jpeg"
        }
       
       

    ]
    // const [loading, setLoading] = useState(true)
    
    // useEffect(() => {
    //     const fetchCourses = async () => {
    //         setLoading(true)
    //         const res = await fetch(`/api/courses`);

    //         if (res.ok) {
    //             const data = await res.json();
    //             setCourses(data.courses)
    //         }
    //         setLoading(false)
    //     }
    //     fetchCourses()
    // }, [])



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {loading */}
                {/* // ? Array.from({ length: 6 }).map((_, idx) => <CourseSkeleton key={idx} />) */}
                { courses.map((course) => (
                    <Card key={course.id} className="pt-0 overflow-hidden">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="h-54 w-full object-cover"
                        />
                        <CardHeader>
                            <CardTitle>{course.title}</CardTitle>
                            {/* <CardDescription>{course.desc}</CardDescription> */}
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full">Enroll Now</Button>
                        </CardFooter>
                    </Card>
                ))}
        </div>
    )
}

export default Courses