import { ButtonHTMLAttributes, MouseEvent } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const Button = ({ text, onClick, className, ...rest }: ButtonProps) => {
  const baseClasses =
    'rounded py-2 px-3 text-white active:scale-95 w-full transition duration-200 bg-blue-500';

  const buttonClasses = `${baseClasses} ${className}`;

  return (
    <button type="button" className={`${buttonClasses}`} onClick={onClick} {...rest}>
      {text}
    </button>
  );
};

export default Button;
