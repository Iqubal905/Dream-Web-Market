import React from 'react';

const Toast = ({ text, type, state }) => {

    return (<div className={`bg-white ${state ? "block" : "hidden"} rounded font-semibold text-black px-3 py-1`}>
        {text}
    </div>)
};

export default Toast;