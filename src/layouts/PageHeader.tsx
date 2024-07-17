import React from "react";
import { Menu } from "lucide-react";
import youTubeLogo from "../assets/youtubelogo.png";

const PageHeader = () => {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between'>
      <div className='flex gap-4 items-center flex-shrink-0'>
        <button>
          <Menu />
        </button>
        <a href='/'>
          {" "}
          <img src={youTubeLogo} className='h-6' />
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default PageHeader;
