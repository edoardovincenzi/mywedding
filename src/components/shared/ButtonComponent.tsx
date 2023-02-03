import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProperties {
  href: string;
  text?: string;
  buttonAttribute?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
}

function ButtonComponent({
  href,
  text,
  buttonAttribute,
  className,
}: ButtonProperties) {
  return (
    <Link to={href} className="max-sm:w-full text-center">
      <button
        {...buttonAttribute}
        className={`btn-ButtonComponent shadow-custom transition-all duration-300 ${className}`}
      >
        {text}
      </button>
    </Link>
  );
}

export default ButtonComponent;
