import React from 'react';

const ImageText = ({ image, alt, text, reverse }) => {
  return (
    <div className="flex justify-center mb-10">
      <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center gap-6 max-w-7xl w-full px-6 md:px-20`}>
        <div className="w-1/2 text-left text-black text-lg">
          {text}
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={image} alt={alt} className="w-64 md:w-[28rem]" />
        </div>
      </div>
    </div>
  );
};

export default ImageText;
