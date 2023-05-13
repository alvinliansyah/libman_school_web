import React from 'react';

const TextField = ({ id, value, onChange, className, placeholder, ...rest }) => {
  return (
    <input
      id={id}
      className={`block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500
 
      ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default TextField;
