import React from 'react';

const page = ({params}) => {
    const [year, id]= params.segments || []
    return (
        <div>
           single blog page for segments {year || new Date().getDate()} and {id}
        </div>
    );
};

export default page;