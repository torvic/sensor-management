import React from 'react';

import cn from 'classnames';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'font-poppins bg-primary text-white rounded-[4px] px-[20px] py-[14px]',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
