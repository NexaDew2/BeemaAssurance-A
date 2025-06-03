import React from "react";
import ImageText from "../ImageText/ImageText";
import finance from '../../assets/finance.png';
import family from '../../assets/family.png';

const imageProps1 = {
  image: finance,
  alt: 'Rich Dad Indian Health Insurance',
  text: (
    <div>
      <p className="text-orange-500 text-2xl">
        If Rich Dad Poor Dad were written for Indian Audience, first chapter would be on Health Insurance
      </p> 
    </div>
  )
};


const imageProps2 = {
  image: family,
  alt: 'Our Offerings',
  title: 'Our Offerings',
  text: (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-left py-4 pb-4"> Our Offerings</h2>
      <ul className="list-disc list-inside space-y-3 text-left text-gray-700 text-xl">
        <li>Full Claim Support</li>
        <li>Complete Transparency</li>
        <li>Best Advisory</li>
        <li>No Spam Calls</li>
        <li>Comprehensive Support</li>
        <li>Personalized Recommendation</li>
      </ul>
    </div>
  ),
};

const Knowledge = () => {
  return (
    <div className="p-8 max-w-10xl mx-auto">
      <ImageText image={imageProps1.image} alt={imageProps1.alt} text={imageProps1.text} reverse={imageProps1.reverse}/>
      <ImageText image={imageProps2.image} alt={imageProps2.alt} text={imageProps2.text} reverse={imageProps2.reverse}/>

    </div>
  );
};

export default Knowledge;
