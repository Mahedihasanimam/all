import React from 'react';



const Title = ({ children, className = '' }) => {
  return <h2 className={`text-xl text-[#1D2026] font-medium ${className}`}>{children}</h2>;
};

export default Title;
