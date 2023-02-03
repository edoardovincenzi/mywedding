const TitleSection = ({ title, id }: { title: string; id?: string }) => {
  return (
    <div
      id={id}
      className={
        'mb-8 px-8 mx-auto text-center mt-8 w-full font-bold text-2xl sm:text-3xl lg:text-4xl'
      }
    >
      <h2>{title}</h2>
    </div>
  );
};

export default TitleSection;
