
import { 
  Users, 
  Target, 
  Award, 
  BookOpen, 
  Laptop, 
  Globe, 
  Heart, 
  Star,
  CheckCircle,
  Monitor,
  Code,
  Briefcase,
  GraduationCap,
  MapPin,
  Quote
} from 'lucide-react';



export default function AboutPage() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced & Friendly Instructors",
      description: "Who teach not just from books, but from real industry experience."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Practical-Oriented Learning",
      description: "Students don't just learn, they do. Every class includes hands-on training."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Smart Classrooms",
      description: "Equipped with the latest computers, projector, software, and tools. Hybrid classes available."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Futuristic Courses",
      description: "From basic computer knowledge to professional-level DCA, ADCA, Tally, Graphic Designing."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Result-Oriented Approach",
      description: "We track every student's growth and ensure they leave with both confidence and competence."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Special Classes for Everyone",
      description: "For Beginners, Housewives & Job Seekers – Learning has no age bar here!"
    }
  ];

  const courses = [
    { name: "DCA (Diploma in Computer Applications)", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "ADCA (Advanced Diploma)", icon: <Award className="w-5 h-5" /> },
    { name: "Tally ERP 9", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Graphic Designing", icon: <Monitor className="w-5 h-5" /> },
    { name: "Programming Languages", icon: <Code className="w-5 h-5" /> },
    { name: "Basic Computer Knowledge", icon: <Laptop className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ComputoAkash
            </h1>
            <p className="text-xl md:text-2xl font-semibold dark:text-blue-100">
              A Temple of Computer Learning
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed mb-8 ">
              In the digital age, computer education is not just a skill—it's a necessity. 
              We are on a mission to empower students with real-world computer skills, 
              preparing them for a bright, successful future.
            </p>
            <div className="dark:bg-white/10 backdrop-blur-sm bg-gray-200 rounded-2xl p-6 border dark:border-white/20">
              <p className="text-2xl md:text-3xl font-bold ">
                "ComputoAkash – Jahaan Sapne Bante Hain Digital!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Than Just an Institute
            </h2>
            <p className="text-lg md:text-xl  max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to make high-quality, affordable, and practical computer education 
              accessible to all, ComputoAkash is more than just an institute—it's a movement towards 
              building smart, skilled, and confident learners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Empowerment</h3>
              <p className="text-gray-600">Bridging the digital gap across India</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
              <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Education</h3>
              <p className="text-gray-600">High-quality, affordable learning for all</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Future Ready</h3>
              <p className="text-gray-600">Preparing students for tomorrow's challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12">
            Why Choose ComputoAkash?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg text-blue-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Courses
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-2">
                  {course.icon}
                  <h3 className="text-lg font-semibold">
                    {course.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg">
              And many more specialized courses designed for your career growth!
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3 text-yellow-300" />
                Our Mission
              </h2>
              <blockquote className="text-lg leading-relaxed mb-6">
                "Empower every student—whether from a small town or big city—with the power of 
                digital skills, practical computer knowledge, and the confidence to build a successful future."
              </blockquote>
              <div className="bg-orange-100 text-orange-800 p-4 rounded-lg">
                <p className="font-medium">
                  हमारा उद्देश्य है कि हर वर्ग के विद्यार्थी को ऐसी कंप्यूटर शिक्षा दी जाए जो न सिर्फ़ 
                  उसे रोज़गार के लिए तैयार करे, बल्कि उसे आत्मनिर्भर भी बनाए।
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <Globe className="w-8 h-8 mr-3 text-yellow-300" />
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                To build a digitally empowered India by training future-ready students 
                in even the smallest towns and villages.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Bridging the digital gap between rural and urban India</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Providing affordable and practical education to all</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 px-4 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            A Personal Message
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-200">
            <Quote className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
              "Mera sapna hai ki har chhota shahar/gaon ka bachcha-bachcha bade shaharo jaise 
              computer education paaye, Aage badhe aur Digital Bharat ka hissa bane"
            </blockquote>
            <footer className="text-lg font-semibold text-gray-800">
              — Akash Raz, Founder & Director
            </footer>
          </div>
        </div>
      </section>

    </div>
  );
}