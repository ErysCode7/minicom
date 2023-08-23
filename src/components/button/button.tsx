import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  backgroundColor?: string;
  onClick?: () => void;
};

const Button = ({ text, backgroundColor, onClick }: Props) => {
  return (
    <button
      type="button"
      className="rounded py-2 px-3 bg-blue-500 text-white active:scale-95 w-full transition duration-200"
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
