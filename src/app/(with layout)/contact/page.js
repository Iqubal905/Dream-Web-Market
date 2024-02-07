import ContactForm from "@/app/components/contactForm";
import CopyButton from "@/app/components/copyButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "contact | Next App",
  description: "Generated by create next app",
};
const AboutPage = () => {
  return (
    <div>
      <div className="         ">
        <div className="   top-10 ">
          <div className="pt-4">
            <h2 className="font-bold text-2xl md:text-4xl text-red-500  text-center  pt-5 pb-12">
              <span className=" ">Get in</span>{" "}
              <span className="text-blue-500  ">
                Touch
              </span>
            </h2>
           
            <div className="grid  grid-cols-1 md:grid-cols-5 gap-5 ">
              <div className=" col-span-2 w-full">
                <div className="w-full bg-white py-4 border rounded-md flex flex-col gap-4 px-3 md:px-7">
                  <div className="flex justify-between items-center  border-b-2   p-3 shadow rounded-lg text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="24"
                      height="24"
                      id="phone"
                    >
                      <path
                        fill="black"
                        d="M27.308,20.649l-2.2-2.2a3.521,3.521,0,0,0-4.938-.021,2.152,2.152,0,0,1-2.729.267A15.026,15.026,0,0,1,13.3,14.562a2.181,2.181,0,0,1,.284-2.739A3.521,3.521,0,0,0,13.553,6.9l-2.2-2.2a3.514,3.514,0,0,0-4.961,0l-.633.634c-3.3,3.3-3.053,10.238,3.813,17.1,4.14,4.141,8.307,5.875,11.686,5.875a7.5,7.5,0,0,0,5.418-2.061l.634-.634A3.513,3.513,0,0,0,27.308,20.649ZM25.894,24.2l-.634.634c-2.6,2.6-8.339,2.125-14.276-3.813S4.571,9.34,7.171,6.74L7.8,6.107a1.511,1.511,0,0,1,2.133,0l2.2,2.2a1.511,1.511,0,0,1,.021,2.11,4.181,4.181,0,0,0-.531,5.239,17.01,17.01,0,0,0,4.713,4.706,4.179,4.179,0,0,0,5.231-.517,1.512,1.512,0,0,1,2.118.013l2.2,2.2A1.51,1.51,0,0,1,25.894,24.2Z"
                      ></path>
                    </svg>
                    <h2 className="text-black bg-gray-50 overflow-hidden p-1  px-2">
                      99999999999
                    </h2>
                    <CopyButton textToCopy={"99999999999"} />
                  </div>
                  <div className="flex justify-between items-center  border-b-2   p-3 shadow rounded-lg text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#4caf50"
                        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                      ></path>
                      <path
                        fill="#1e88e5"
                        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                      ></path>
                      <polygon
                        fill="#e53935"
                        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                      ></polygon>
                      <path
                        fill="#c62828"
                        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                      ></path>
                      <path
                        fill="#fbc02d"
                        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                      ></path>
                    </svg>
                    <h2 className="text-black bg-gray-50 overflow-hidden p-1  px-2">
                      mail@gmail.com
                    </h2>
                    <CopyButton textToCopy={"mail@gmail.com"} />
                  </div>
                  <div className="flex justify-between items-center  border-b-2   p-3 shadow rounded-lg text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="126.445 2.281 589 589"
                      id="facebook"
                    >
                      <circle
                        cx="420.945"
                        cy="296.781"
                        r="294.5"
                        fill="#fff"
                      ></circle>
                      <path
                        fill="blue"
                        d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                      ></path>
                    </svg>
                    <h2 className="text-black bg-gray-50 overflow-hidden p-1  px-2">
                      Facebook Link
                    </h2>
                    <CopyButton
                      textToCopy={
                        "https://www.facebook.com/profile.php?id=61554824227057"
                      }
                    />
                  </div>

                  <div className="flex py-2  mt-6 justify-center items-end">
                    <h2 className="  font-semibold text-black mr-2">
                      Please connect
                    </h2>
                    <a
                      className="px-1"
                      href="https://www.facebook.com/YourPageURL"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="126.445 2.281 589 589"
                        id="facebook"
                      >
                        <circle
                          cx="420.945"
                          cy="296.781"
                          r="294.5"
                          fill="#3c5a9a"
                        ></circle>
                        <path
                          fill="#fff"
                          d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                        ></path>
                      </svg>
                    </a>

                    <a className="px-1" href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="26"
                        viewBox="0 0 224 226"
                        id="facebook-messenger"
                      >
                        <defs>
                          <linearGradient
                            id="a"
                            x1="50%"
                            x2="50%"
                            y1="6.76%"
                            y2="95.6%"
                          >
                            <stop offset="0"></stop>
                            <stop offset="1"></stop>
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#a)"
                          d="m41.255 185.52v40.2l37.589-21.37c10.478 3.02 21.616 4.65 33.156 4.65 61.86 0 112-46.79 112-104.5 0-57.714-50.14-104.5-112-104.5-61.856 0-112 46.786-112 104.5 0 32.68 16.078 61.86 41.255 81.02z"
                        ></path>
                        <path
                          fill="#fff"
                          d="m100.04 75.878l-60.401 63.952 54.97-30.16 28.721 30.16 60.06-63.952-54.36 29.632-28.99-29.632z"
                        ></path>
                      </svg>
                    </a>
                    <a className="" href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 99.59 99.59"
                        id="linkedin-circle"
                      >
                        <defs>
                          <linearGradient
                            id="a"
                            x1="-1.971"
                            x2="-1.264"
                            y1="2.61"
                            y2="3.317"
                            gradientUnits="objectBoundingBox"
                          >
                            <stop offset="0"></stop>
                            <stop offset="1"></stop>
                          </linearGradient>
                        </defs>
                        <path
                          fill="#black"
                          d="M56.82,7.025a49.795,49.795,0,1,0,49.8,49.795A49.795,49.795,0,0,0,56.82,7.025ZM43.534,80.893H32.6V45.572H43.534ZM38.016,40.946a6.518,6.518,0,1,1,6.465-6.517A6.492,6.492,0,0,1,38.016,40.946Zm46.49,39.947H73.626V62.353c0-5.085-1.932-7.924-5.953-7.924-4.376,0-6.662,2.956-6.662,7.924V80.893H50.525V45.572H61.011v4.757a12.319,12.319,0,0,1,10.644-5.835c7.49,0,12.851,4.573,12.851,14.034V80.893Z"
                          data-name="linkedin circle"
                          transform="translate(-7.025 -7.025)"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" col-span-3 w-full  ">
                <div className="mb-8 ">
                  <ContactForm></ContactForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
