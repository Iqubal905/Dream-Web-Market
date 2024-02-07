"use client"

import { useState } from "react"

const ReviewSlide = () => {
    let data = [
        {
            name: "Jamie Famister",
            id: 1,
            text: "BrandCurb provides strong ROI and attracts new volunteers and donors. They have a fantastic commitment to the project and the client’s mission. They deliver projects on time and communicate effectively. They also provide great value on cost."
        },
        {
            name: "Aria Mark",
            id: 2,
            text: "We have been working with BrandCurb for almost a year now as our marketing company. Our business is unique and our marketing approach needed to be as well. They have worked with us to learn about our competition and what drives customers to us and capitalized on our strengths."
        },
        {
            name: "Mr. Hound",
            id: 3,
            text: "Since launching the website, the company saw a 120% increase in their traffic and their reach has doubled since implementing the BrandCurb team's recommendations. Though the team ran into issues during the project they were able to solve all of them.",
        },
    ]

    const toggleReviews = (para) => {
        let scrollDiv, divChild;
        scrollDiv = document.getElementById("container-div");
        if (para == "left") {
            console.log(scrollDiv.scrollLeft)
            scrollDiv.scrollLeft -= Number(scrollDiv.clientWidth);
        } else {
            scrollDiv.scrollLeft += Number(scrollDiv.clientWidth);
        }
    }
    return (
        <div className="col-span-5 lg:col-span-3 relative flex items-center">
            <button id="next" onClick={() => toggleReviews("left")} className="absolute -left-2 bg-blue-500 font-extrabold text-xl z-10 px-3 py-2 text-white duration-100 active:scale-90 rounded">←</button>
            <button id="prev" onClick={() => toggleReviews("right")} className="absolute -right-2 bg-blue-500 font-extrabold text-xl px-3 py-2 z-10 text-white duration-100 active:scale-90 rounded">→</button>
         
            <div id="container-div" className=' flex items-center relative md:overflow-x-hidden overflow-x-scroll   scroll-smooth snap-x snap-mandatory'>
                {
                    data.map(ele => <div key={ele.id} id={ele.id} className="flex items-center snap-center relative w-full bg-gray-100 shrink-0 rounded py-6 px-10">
                        <div className="w-full flex-col text-justify p-1 h-44 flex items-center justify-center ">
                            <p className="text-2xl font-semibold py-4">{ele.name}</p>

                            <p className="font-semibold text-gray-600 overflow-clip">{ele.text}</p>
                            <p className="capitalize text-sm text-gray-700 py-1">rating: 4.5</p>
                        </div>

                    </div>)
                }

            </div>

        </div>
    )
}

export default ReviewSlide;