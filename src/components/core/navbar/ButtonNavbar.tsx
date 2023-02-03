import { Link } from 'react-router-dom';

interface ButtonProperties {
  title: string;
  href: string;
  classNameButton?: string;
}

const ButtonNavbar = ({ title, href, classNameButton }: ButtonProperties) => {
  return (
    <Link to={href}>
      <button
        className={`p-3 text-2xl landscape:max-lg:text-base  min-w-[100px] rounded-md ${classNameButton} transition-all duration-300 hover:underline hover:underline-offset-8 hover:decoration-themeColor`}
      >
        {title}
      </button>
    </Link>
  );
};

export default ButtonNavbar;
