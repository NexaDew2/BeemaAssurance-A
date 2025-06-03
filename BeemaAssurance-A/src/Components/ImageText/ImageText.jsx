import React from 'react';

const ImageText = ({ image, alt, text, reverse }) => {
  return (
    <div className="flex justify-center mb-10">
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 max-w-7xl w-full px-4 md:px-20`}>
        <div className="w-full md:w-1/2 text-center md:text-left text-black text-lg">
          {text}
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={image} alt={alt} className="w-64 md:w-[24rem]" />
        </div>
      </div>
    </div>
  );
};

export default ImageText;
