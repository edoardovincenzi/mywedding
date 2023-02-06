const Completionist = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <iframe
        src="https://giphy.com/embed/JUSwkiO1Eh5K43ruN0"
        width="100%"
        style={{ position: 'absolute' }}
        className="giphy-embed pt-6 h-full"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Completionist;
