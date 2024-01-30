import Link from "next/link";
import ReviewSlide from "./ReviewSlide";

const Reviews = () => {
    return (
        <div className='grid grid-cols-5 py-5 gap-3 items-center min-h-[70vh]'>
            <div className='col-span-5 lg:col-span-2 '>
                <h1 className='text-3xl font-extrabold py-7'>Hear from Our Happy Clients</h1>
                <p className='text-gray-700'>Take a look at the glowing reviews and success stories from some of our happy customers to see how BrandCurb can help your business achieve its goals.</p>
                <div className='flex my-6 gap-3'>

                    <Link href={"/#price"} className='bg-blue-500 px-5 py-2 capitalize rounded-full font-semibold text-lg text-white'>Contact us</Link>
                </div>
            </div>
            <div className='col-span-5 lg:col-span-3 flex justify-center items-center relative'>
                <ReviewSlide></ReviewSlide>
            </div>
        </div>
    );
};

export default Reviews;