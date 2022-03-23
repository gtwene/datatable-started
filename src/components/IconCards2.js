import React from "react";
import { GrSettingsOption } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

const IconCards2 = () => {
  const buttonStyling = `font-semibold border-2 
   rounded-lg ring-grey-200 p-10 shadow-xl hover:bg-gray-50 
   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
   `;

  const textStyle = `pt-4 text-gray-500 font-xl hover:animate-pulse cursor-pointer`;

  return (
    <div className="flex space-x-10 m-5">
      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <GrSettingsOption
              size="3.5rem"
              className="fill-blue-700 animate-spin"
            />
          </button>
          <text className={textStyle}>
            Create <br /> Additional Account
          </text>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <FaReact size="3.5rem" className="fill-blue-700 animate-spin" />
          </button>
          <text className={textStyle}>
            Amend <br /> Additional Account
          </text>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <BsYoutube size="3.5rem" className="fill-red-700" />
          </button>
          <text className={textStyle}>
            Approve <br /> Additional Account
          </text>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <FcGoogle size="3.5rem" />
          </button>
          <text className={textStyle}>
            Account <br /> Opening SLCB
          </text>
        </div>
      </div>

      {/* <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <FcHome size="3.5rem" />
          </button>
          <text className={textStyle}>Home Town</text>
        </div>
      </div> */}
    </div>
  );
};

export default IconCards2;
