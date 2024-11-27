import React from "react";
import "./Testimonial.css";
import TestimonialItem from "./TestimonialItem";
import Lenaprofile from "../../images/Lena testimonial.jpg";
import Lenastars from "../../images/stars rating2.png";
import Marthaprofile from "../../images/martha testimonial.png";
import Marthastars from "../../images/stars rating.png";
import Seanprofile from "../../images/Sean testimonial.png";
import Seanstars from "../../images/stars rating2.png";
import Robertprofile from "../../images/robert testimonial.png";
import Robertstars from "../../images/stars rating3.png";

const testimonials = [
  {
    id: 1,
    name: "Martha Stewart",
    image: Marthaprofile,
    rating: Marthastars,
    review:
    "A perfect family-friendly spot! My kids loved the bruschetta, the Greek salad was incredibly fresh, and the lemon dessert was a hit for everyone. Great food and welcoming atmosphere!",
  
  },
  {
    id: 2,
    name: "Sean Parker",
    image: Seanprofile,
    rating: Seanstars,
    review:
      "Great spot for fresh and healthy options! The Greek salad is my favorite, the bruschetta was a treat, and the lemon dessert was refreshing. Would love a lighter dessert option, but overall fantastic!",
  },
  {
    id: 3,
    name: "Robert Smith",
    image: Robertprofile,
    rating: Robertstars,
    review:
    "Authentic Mediterranean flavors! The Greek salad was fresh and vibrant, the bruschetta perfectly crisp, and the lemon dessert delightfully zesty. A must-visit for quality ingredients and great taste!",
  },
  {
    id: 4,
    name: "Lena Dunham",
    image: Lenaprofile,
    rating: Lenastars,
    review:
      "Fantastic flavors that remind me of Europe! The Greek salad was authentic, the bruschetta was delicious, and the lemon dessert had the perfect balance of tart and sweet. Highly recommend!",
  },
];
const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2>Testimonials</h2>
        <div className="testimonial-content">
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
