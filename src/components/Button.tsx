import React from 'react';

const Button = ({ variant, onClick, children }) => {
  const buttonClass = variant === 'big' ? 'btn btn-primary' : 'btn btn-danger btn-sm rounded';

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
