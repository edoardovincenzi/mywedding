import React from 'react';

const WrapperContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <div
      className="container h-full px-3 mx-auto mt-20 pb-8"
      style={{ minHeight: 'calc(100vh - 80px - 224px)' }}
    >
      {children}
    </div>
  );
};

export default WrapperContainer;
