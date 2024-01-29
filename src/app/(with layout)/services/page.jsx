import React from 'react';
import ServiceCard from './cards/ServiceCard';

const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "Our web development services encompass with a wide range of technologies and platforms. We specialize in creating responsive and user-friendly websites tailored to meet your specific business needs. From front-end design to back-end functionality, we deliver high-quality solutions that drive online success."
        },
        {
            title: "SEO",
            description: "Boost your online visibility with our comprehensive SEO services. We employ proven strategies to optimize your website's search engine ranking, increase organic traffic, and enhance overall online presence. Stay ahead of the competition and reach your target audience effectively with our SEO expertise."
        },
        {
            title: "Design",
            description: "Elevate your brand with visually stunning designs. Our creative team combines aesthetics with functionality to deliver captivating visuals that leave a lasting impression. Whether it's logo design, UI/UX, or graphic elements, we craft designs that align with your brand identity and resonate with your audience."
        },
        {
            title: "Quality and Testing",
            description: "Ensuring the quality of your software is paramount to its success. Our dedicated quality assurance and testing team rigorously assesses your applications to identify and rectify any issues. From functional testing to performance testing, we guarantee a robust and flawless user experience for your software."
        },
        {
            title: "Maintenance",
            description: "Our maintenance services ensure that your digital assets remain up-to-date and secure. We offer proactive maintenance to address potential issues before they impact your operations. Whether it's regular updates, security patches, or performance enhancements, we keep your systems running smoothly."
        },
        {
            title: "Bug Solving",
            description: "Swift and efficient bug resolution is crucial for maintaining a seamless user experience. Our experienced developers specialize in identifying and resolving bugs promptly. We conduct thorough debugging processes to eliminate issues, ensuring that your software operates at its best without disruptions."
        }
    ]
    return (
        <div className='mb-16'>
            <h1 className='text-center text-3xl font-semibold py-12'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map((ele, index) => <ServiceCard key={index} data={ele}></ServiceCard>)
                }

            </div>

        </div>
    );
};

export default Services;