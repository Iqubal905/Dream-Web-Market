"use client"
import React, { useState } from 'react';
import Card from './Card';

const TabComponent = () => {
  const [activeTab, setsActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Basic', content: [
        "Responsive Design",
        "Customizable Templates",
        "Basic SEO Optimization",
        "Email Support",
        "Mobile Optimization",
        "Social Media Integration"
      ], price: '9999'
    },
    {
      title: 'Standard', content: [
        "Advanced SEO Optimization",
        "E-commerce Integration",
        "Priority Customer Support",
        "Monthly Performance Reports",
        "Custom Domain",
        "Content Management System (CMS)"
      ], price: '14999'
    },
    {
      title: 'Premium', content: [
        "Dedicated Support Team",
        "Advanced Analytics",
        "Custom Feature Development",
        "24/7 Emergency Support",
        "Security Monitoring",
        "Unlimited Bandwidth"
      ], price: '19999'
    },
  ];

  const handleTabClick = (index) => {
    setsActiveTab(index);
  };

  return (
    <div className='px-0.5 md:px-5'>

      <div className='border-t-2 border-s-2 border-e-2 py-2'>

        <div className={activeTab === 0 ? 'block' : 'hidden'}>
          <h2 className='  py-1 text-center  font-semibold'> <span className=''>Price: Tk</span> {tabs[0].price}</h2>
        </div>
        <div className={activeTab === 1 ? 'block' : 'hidden'}>
          <h2 className='  py-1 text-center  text-blue-400 font-semibold'> <span className=''>Price: Tk</span> {tabs[1].price}</h2>
        </div>
        <div className={activeTab === 2 ? 'block' : 'hidden'}>
          <h2 className='  py-1 text-center   text-green-600 font-semibold'> <span className=''>Price: Tk</span> {tabs[2].price}</h2>
        </div>
      </div>
      <div className="flex justify-center gap-2 text-base py-2 border-s-2 border-e-2 border-b-2 flex-wrap">
        <button
          className={`active:scale-90 duration-100 ${activeTab === 0 ? ' bg-black text-white font-semibold ' : 'bg-gray-200  text-black font-semibold '
            } px-4 py-2 rounded focus:outline-none`}
          onClick={() => handleTabClick(0)}
        >
          {tabs[0].title}
        </button>
        <button
          className={`active:scale-90 duration-100 ${activeTab === 1 ? '  bg-blue-400 text-white font-semibold ' : 'bg-gray-200   text-black font-semibold '
            } px-4 py-2 rounded focus:outline-none`}
          onClick={() => handleTabClick(1)}
        >
          {tabs[1].title}
        </button>
        <button
          className={`active:scale-95 duration-100 ${activeTab === 2 ? ' bg-green-600 text-white font-semibold ' : 'bg-gray-300  text-black font-semibold '
            } px-4 py-2 rounded focus:outline-none`}
          onClick={() => handleTabClick(2)}
        >
          {tabs[2].title}
        </button>
      </div>
      <div className='py-2 px-6 border-b-2 border-s-2 border-r-2'>
        <div className="my-4 mb-8">
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


      </div>

    </div>
  );
};

export default TabComponent;
