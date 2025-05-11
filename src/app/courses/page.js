
import {
  Card,
  CardDescription,
 CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript and modern frameworks to build responsive websites and web applications.",
      image:"https://images.unsplash.com/photo-1668095736408-19144e4c05e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Data Science & AI",
      desc: "Master Python, data analysis, machine learning and artificial intelligence with hands-on projects.",
      image:"/2.webp"
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      desc: "Learn DSA and crack interviews at top companies like Google and Microsoft.",
      image:"/3.webp"
    },

  ]
  return (

    <section className="py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-semibold lg:text-3xl mb-8 dark:text-white">
          Code Smarter with Real-World Practice
        </h2>
        <p className="text-center text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl mx-auto">
          At <span className="font-medium">ComputoAkash</span> , you don't just learn code — you engage in practical
          exercises that reflect real-world scenarios. From beginner-friendly
          lessons to advanced courses trusted by professionals, we prepare you for
          real-world projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            courses.map((course) => {
              return <Card key={course.id} className={"pt-0 overflow-hidden"}>
                <img src={course.image} alt={course.title} className="h-54 w-full object-cover"/>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.desc}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className={"w-full"}>Enroll Now</Button>
                </CardFooter>
               
              </Card>

            })
          }

        </div>
      </div>
    </section>
    

  );
}
