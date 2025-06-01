import React from "react";
import insta from '../../assets/insta.png';
import phone from '../../assets/phone.png';

function Icontext() {
    return (
        <>
        <div>
           <h2 className="text-xl text-center">© 2025 BeemaAssurance. All rights reserved.</h2>

        </div>
       
        <div className="flex justify-between items-center w-full px-4 py-2">
            {/* Instagram */}
            <div className="flex items-center gap-2">
                <img src={insta} alt="Instagram" className="w-10 h-8" />
                <p className="text-black">@beemaassurance</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2  px-2 py-1 rounded">
                <img src={phone} alt="Phone" className="w-6 h-6" />
                <p className="text-black">+91 84537 39878</p>
            </div>
        </div>
         </>
    );
}

export default Icontext;
