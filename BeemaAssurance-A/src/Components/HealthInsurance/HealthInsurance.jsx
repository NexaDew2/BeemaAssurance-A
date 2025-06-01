import React from "react";
import ImageText from "../ImageText/ImageText";
import benifits from '../../assets/benifits.png';

const imageProps3 = {
  image: benifits,
  title: 'Benefits of Health Insurance',
    text: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Benefits of Health Insurance</h2>
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li> Cashless Hospitalization</li>
    <li> Fast Claim Settlement</li> 
    <li>Tax Benefits (Section 80D)</li>
    <li>Coverage for Children and Family</li>
    <li>Free Health Check-up</li>
  </ul>
  </div>)
};


const HealthInsurance = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <ImageText image={imageProps3.image} alt={imageProps3.alt} text={imageProps3.text} reverse={imageProps3.reverse}/>
    </div>
  );
};

export default HealthInsurance;
