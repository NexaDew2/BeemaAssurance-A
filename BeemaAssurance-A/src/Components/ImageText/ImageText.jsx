import React from 'react';

const ImageText = ({ image, alt, text, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-6 mb-10`}>
      <div className="md:w-1/2 text-center md:text-left text-black-600  text-lg px-4">
        {text}
      </div>
      <div className="md:w-1/2 px-4">
        <img src={image} alt={alt} className="w-64 md:w-80 rounded-lg shadow-md mw-4xl" />
      </div>
    </div>
  );
};

export default ImageText;
