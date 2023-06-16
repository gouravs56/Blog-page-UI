import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gray-100 mt-10 py-1 ">
      <marquee
        behavior="scroll"
        scrollamount="10"
        scrolldelay="60"
        onMouseOver="this.stop()"
        onMouseOut="this.start()"
        direction="right"
      >
        This is a Demo Blog Page
      </marquee>
    </div>
  );
};

export default Banner;
