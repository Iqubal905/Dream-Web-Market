import React from 'react';

const page = ({ params }) => {
    
    return (
        <div>
            <h2>single blog id: {params.id}</h2>
        </div>
    );
};

export default page;