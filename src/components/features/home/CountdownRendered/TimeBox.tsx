export const TimeBox = (props: { unitName: string; unit: number }) => {
  return (
    <div className="bg-white/90 rounded p-3 md:p-10 w-full text-center">
      <h2 className="text-5xl">{props.unit}</h2>
      <p>{props.unitName}</p>
    </div>
  );
};
