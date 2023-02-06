import { IconType } from 'react-icons';

interface StepProps {
  title: string;
  where: string | JSX.Element;
  when: string;
  description: string;
  Icon: IconType;
}

const Step = ({ title, where, when, description, Icon }: StepProps) => {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8 text-gray-500 bg-gray-100 rounded-full -left-4 ring-4 ring-slate-100">
        <Icon className="w-6 h-6" />
      </span>
      <h3 className="font-bold text-xl leading-tight text-black">{title}</h3>
      <p className="text-sm">
        <b className="text-black">Dove: </b> {where}
      </p>
      <p className="text-sm">
        <b className="text-black">Orario: </b> {when}
      </p>
      <p className="text-sm ">
        <b className="text-black">Descrizione evento: </b> {description}
      </p>
    </li>
  );
};

export default Step;
