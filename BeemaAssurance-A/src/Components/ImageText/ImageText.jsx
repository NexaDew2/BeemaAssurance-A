import React from 'react';

const ImageText = ({ image, alt, text, reverse }) => {
  return (
    <div className="flex justify-center mb-10">
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-6 max-w-7xl w-full px-60`}>
        <div className="md:w-1/2 text-center md:text-left text-black-600 text-lg ">
          {text}
        </div>
        <div className="md:w-1/2">
          <img src={image} alt={alt} className="w-64 md:w-[28rem]" />
        </div>
      </div>
    </div>
  );
};

export default ImageText;
