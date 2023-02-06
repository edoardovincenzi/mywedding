interface CardInfoProps {
  id: string;
  title: string | JSX.Element;
  imgUrl: string;
}

const CardInfo = ({ id, title, imgUrl }: CardInfoProps) => {
  return (
    <figure
      id={id}
      className="relative mt-4 overflow-hidden bg-white/70 border border-gray-200 rounded-lg md:w-[100%] lg:w-[49%]"
    >
      <img
        className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-l-lg h-full"
        src={imgUrl}
        alt={id}
      />
      <figcaption className="absolute bottom-0 w-full bg-white/70 p-3 h-18">
        {title}
      </figcaption>
    </figure>
  );
};

export default CardInfo;
