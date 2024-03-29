"use client"
import React, { useState } from 'react';

const CopyButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Copy failed', error);
      });
  };
  
  return (
    <div className='justify-self-end'>
      <button
        className={`copy-button ${isCopied ? 'text-blue-300' : ' text-blue-500'}  border-b-2  border-blue-500  px-2 py-1 rounded`}
        onClick={handleCopy}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CopyButton;
