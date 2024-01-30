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
    const [current, setCurent] = useState(data[0])
    const toggleReviews = (para) => {
        if (para == "left") {
            let newId = current.id - 1;
            let newData = data.find(ele => ele.id == newId);
            if (!newData) return setCurent(data[data.length - 1]);
            setCurent(newData);
        } else {
            let newId = current.id + 1;
            let newData = data.find(ele => ele.id == newId);
            if (!newData) return setCurent(data[0]);
            setCurent(newData);
        }
    }
    return (
        <>
            <div id="swipe" className="flex items-center relative w-full bg-gray-100 rounded py-6 px-10 ">
                <div className="w-full flex-col text-justify p-1 h-44 flex items-center justify-center ">
                    <p className="text-2xl font-semibold py-4">{current.name}</p>

                    <p className="font-semibold text-gray-600 overflow-clip">{current.text}</p>
                    <p className="capitalize text-sm text-gray-700 py-1">rating: 4.5</p>
                </div>
                <button id="next" onClick={() => toggleReviews("left")} className="absolute -left-2 bg-blue-500 font-extrabold text-xl px-3 py-2 text-white duration-100 active:scale-90 rounded">←</button>
                <button id="prev" onClick={() => toggleReviews("right")} className="absolute -right-3 bg-blue-500 font-extrabold text-xl px-3 py-2 text-white duration-100 active:scale-90 rounded">→</button>
            </div>
        </>
    )
}

export default ReviewSlide;