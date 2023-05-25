import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Rating from "react-rating";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="mb-32">
      <SectionTitle
        subHeading="What Our Clients Say"
        heading="testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center max-w-5xl mx-auto">
              <Rating
                className="text-4xl text-[#CD9003] mb-12"
                initialRating={review.rating}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                fullSymbol={<FaStar></FaStar>}
              />
              <div className="flex justify-center mb-10">
                <FaQuoteLeft className="text-8xl text-center"></FaQuoteLeft>
              </div>

              <p className="text-xl text-[#444444] mb-2">{review.details}</p>
              <h3 className="text-[#CD9003] text-3xl font-medium">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
