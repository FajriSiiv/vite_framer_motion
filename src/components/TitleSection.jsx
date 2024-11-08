import React from "react";

const TitleSection = ({ titleHeading, titleDesc }) => {
  return (
    <>
      <h2 className="uppercase text-[#34fb49b2] tracking-[0.4em] font-bold">
        {titleHeading}
      </h2>

      <p className="text-4xl leading-tight mt-6 font-semibold text-white">
        {titleDesc}
      </p>
    </>
  );
};

export default TitleSection;
