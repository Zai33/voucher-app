import React from "react";

const Container = ({ children, classname }) => {
  return (
    <div className={`w-full md:w-[720px] lg:w-[1000px] mx-auto ${classname}`}>
      {children}
    </div>
  );
};

export default Container;
