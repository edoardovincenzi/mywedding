const TitleSection = ({ title, id }: { title: string; id?: string }) => {
  return (
    <div
      id={id}
      className={
        'mb-8 rounded-lg mx-auto text-center mt-8 w-max font-bold text-2xl sm:text-3xl lg:text-4xl bg-white/90'
      }
    >
      <h2>{title}</h2>
    </div>
  );
};

export default TitleSection;
