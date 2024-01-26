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
    <div>
      <button
        className={`copy-button ${isCopied ? 'bg-green-500' : 'bg-blue-500'} text-white px-2 py-1 rounded`}
        onClick={handleCopy}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CopyButton;
