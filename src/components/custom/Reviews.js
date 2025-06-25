import React from 'react'


const Reviews = () => {

  const reviews = [
    {
      id: 1,
      name: "Aarav Singh",
      image: "https://i.pravatar.cc/100?img=1",
      rating: 5,
      review:
        "This course was amazing! I learned so much and the instructor was fantastic.",
    },
    {
      id: 2,
      name: "Meera Sharma",
      image: "https://i.pravatar.cc/100?img=2",
      rating: 4,
      review:
        "Very informative and easy to follow. Would recommend it to anyone interested in web development.",
    },
    {
      id: 3,
      name: "Rahul Verma",
      image: "https://i.pravatar.cc/100?img=3",
      rating: 4,
      review:
        "I enjoyed the hands-on projects the most. Really helped solidify the concepts.",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-semibold lg:text-5xl mb-10">
          Student Reviews
        </h2>
       
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{review.name}</h3>
                  <div className="text-yellow-500 text-sm">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 ">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


  )
}

export default Reviews