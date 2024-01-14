"use client"
import React, { useState } from 'react';
import Card from './Card';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Basic', content:['Responsive website design tailored to your needs','Database setup for basic functionality','Email support for any technical issues', ' Basic security measures to protect your site','Basic website analytics to track essential metrics.'],  price:'1999' },
    { title: 'Standard', content:['Advanced features and enhanced design','Custom server-side logic, database optimization, and API integrations', 'Priority email and chat support with faster response times','Regular updates and maintenance to ensure optimal performance'] ,price:'2999' },
    { title: 'Premium', content:['Feature-rich website with a focus on user experience and interactivity','Advanced server-side solutions, complex database architecture', '24/7 dedicated support via email, chat, and phone', 'Proactive monitoring, security updates, and continuous improvement','Regular consultations and strategy sessions'] ,price:'3999' },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className=' mx-2 md:mx-20 text-center'>

<div className=' pb-1'>
  
<div className={activeTab === 0 ? 'block' : 'hidden'}>
         <h2 className='  bg-sky-600 py-1 text-center text-white font-semibold'> <span className=''>Price: Tk</span> {tabs[0].price}</h2>
        </div>
        <div className={activeTab === 1 ? 'block' : 'hidden'}>
        <h2 className=' bg-cyan-500 py-1 text-center text-white font-semibold'> <span className=''>Price: Tk</span> {tabs[1].price}</h2>
        </div>
        <div className={activeTab === 2 ? 'block' : 'hidden'}>
        <h2 className='  bg-teal-600 py-1 text-center text-white font-semibold'> <span className=''>Price: Tk</span> {tabs[2].price}</h2>
        </div>
</div>
      <div className="flex justify-center  text-sm space-x-1 md:space-x-4 md:py-2 md:border-2 ">
        <button
          className={`${
            activeTab === 0 ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-800'
          } px-4 py-2 rounded focus:outline-none`}
          onClick={() => handleTabClick(0)}
        >
          {tabs[0].title}
        </button>
        <button
          className={`${
            activeTab === 1 ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-800'
          } px-4 py-2 rounded focus:outline-none`}
          onClick={() => handleTabClick(1)}
        >
          {tabs[1].title}
        </button>
        <button
          className={`${
            activeTab === 2 ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-800'
          } px-4 py-2 rounded focus:outline-none`}
          onClick={() => handleTabClick(2)}
        >
          {tabs[2].title}
        </button>
      </div>
 <div className='  mx-1 md:mx-20 px-1 md:px-6 py-2 shadow-md'>
      <div className="mt-4 ">
        <div className={activeTab === 0 ? 'block' : 'hidden'}>
          <Card title={tabs[0].title} content={tabs[0].content} />
        </div>
        <div className={activeTab === 1 ? 'block' : 'hidden'}>
          <Card title={tabs[1].title} content={tabs[1].content} />
        </div>
        <div className={activeTab === 2 ? 'block' : 'hidden'}>
          <Card title={tabs[2].title} content={tabs[2].content} />
        </div>
      </div>

      <div className='flex py-2 justify-center  items-center'>
        <h2 className='  font-semibold'>Please connect</h2>
     <a className='px-1' href="https://www.facebook.com/YourPageURL" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="126.445 2.281 589 589" id="facebook">
  <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle>
  <path fill="#fff" d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z">
    </path>
    </svg>
</a>

<a className='px-1' href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 224 226" id="facebook-messenger"><defs><linearGradient id="a" x1="50%" x2="50%" y1="6.76%" y2="95.6%"><stop offset="0" ></stop><stop offset="1" ></stop></linearGradient></defs><path fill="url(#a)" d="m41.255 185.52v40.2l37.589-21.37c10.478 3.02 21.616 4.65 33.156 4.65 61.86 0 112-46.79 112-104.5 0-57.714-50.14-104.5-112-104.5-61.856 0-112 46.786-112 104.5 0 32.68 16.078 61.86 41.255 81.02z"></path><path fill="#fff" d="m100.04 75.878l-60.401 63.952 54.97-30.16 28.721 30.16 60.06-63.952-54.36 29.632-28.99-29.632z"></path></svg>
</a>
<a className='' href="">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 99.59 99.59" id="linkedin-circle"><defs><linearGradient id="a" x1="-1.971" x2="-1.264" y1="2.61" y2="3.317" gradientUnits="objectBoundingBox"><stop offset="0" ></stop><stop offset="1" ></stop></linearGradient></defs><path fill="url(#a)" d="M56.82,7.025a49.795,49.795,0,1,0,49.8,49.795A49.795,49.795,0,0,0,56.82,7.025ZM43.534,80.893H32.6V45.572H43.534ZM38.016,40.946a6.518,6.518,0,1,1,6.465-6.517A6.492,6.492,0,0,1,38.016,40.946Zm46.49,39.947H73.626V62.353c0-5.085-1.932-7.924-5.953-7.924-4.376,0-6.662,2.956-6.662,7.924V80.893H50.525V45.572H61.011v4.757a12.319,12.319,0,0,1,10.644-5.835c7.49,0,12.851,4.573,12.851,14.034V80.893Z" data-name="linkedin circle" transform="translate(-7.025 -7.025)">
  </path>
  </svg>
</a>
     </div>
 </div>

    </div>
  );
};

export default TabComponent;
