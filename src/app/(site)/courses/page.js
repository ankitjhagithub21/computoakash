import Courses from "@/components/custom/Courses";


export default function CoursesPage() {
  
  return (

    <section className="py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-center text-2xl font-semibold lg:text-5xl mb-10">
          Our Courses
        </h2>
       
       <Courses/>
      </div>
    </section>


  );
}
