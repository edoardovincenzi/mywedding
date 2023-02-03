interface CardInfoProps {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
}

const CardInfo = ({ id, title, description, imgUrl }: CardInfoProps) => {
  return (
    <div
      id={id}
      className="flex flex-col items-center mt-4 md:h-60  overflow-hidden bg-white border md:w-[100%] lg:w-[49%] border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100"
    >
      <img
        className="object-cover w-full rounded-t-lg h-60 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
        src={imgUrl}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default CardInfo;
