import React from 'react';

const WrapperContainer = ({
  children,
  onClickFn,
}: {
  children: JSX.Element;
  onClickFn?: () => void;
}) => {
  return (
    <div
      className="container h-full px-3 mx-auto mt-20 pb-8"
      style={{ minHeight: 'calc(100vh - 80px - 224px)' }}
      onClick={onClickFn}
    >
      {children}
    </div>
  );
};

export default WrapperContainer;
