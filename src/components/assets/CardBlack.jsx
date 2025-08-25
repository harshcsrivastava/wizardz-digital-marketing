import React from 'react'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function CardBlack({line_one="Search engine", line_two="optimization",
    img_url = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS2YcHaOzko4dlh_GXAXD56b8iQr7Dz2xccsYhv97hK1yu8m-mM",
    isBlack = false}) {

  return (
    <>
      <div
        className={`right border-2 rounded-3xl overflow-hidden p-8 md:min-w-[calc(50%-12px)] flex gap-2 items-center justify-between ${
          isBlack ? " bg-secondary text-primary" : ""
        }`}
      >
        <div className="flex flex-col justify-between gap-4">

            {/* title text */}
          <div>
            <h1
              className={`text-lg w-fit p-2 font-secondary rounded-xl ${
                isBlack ? " bg-primary text-secondary" : "bg-lime"
              }`}
            >
              {line_one}
            </h1>
            <h1
              className={` text-lg w-fit p-2 font-secondary rounded-xl ${
                isBlack ? " bg-primary text-secondary" : "bg-lime"
              }`}
            >
              {line_two}
            </h1>
          </div>


          <div className="flex gap-4 items-center cursor-pointer">
            <div
              className={` rounded-full w-12 h-12 flex justify-center ${
                isBlack
                  ? " bg-primary text-secondary"
                  : "text-primary bg-secondary"
              }`}
            >
              <i class="text-lg ri-arrow-right-up-line"></i>
            </div>

            <h2 className="font-subtitle text-md">Learn more</h2>
          </div>
        </div>
        <img src={img_url} alt="" srcset="" className='max-w-1/4 h-fit flex'/>
      </div>
    </>
  );
}

export default CardBlack