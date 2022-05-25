import React from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";
import Review from "../Home/Review";

const Reviews = () => {
    const {data: reviews,isLoading,error,refetch} = useQuery('reviews',() => {
        return axiosPrivate.get('http://localhost:5000/allReviews')
    })
    if(isLoading){
        return <Loading className='text-black'></Loading>
    }
    console.log(reviews)
  return (
    <div className="sm:container sm:mx-auto mx-5">
      <h1 className="text-4xl text-stone-700 font-semibold">
        Customer Reviews
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5">
        {
            reviews.data.map(review => <Review key={review._id} review={review}></Review>)
        }
      </div>
    </div>
  );
};

export default Reviews;