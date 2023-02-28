import React from 'react';

const WrapperContainer = ({
  children,
  onClickFn,
  classNameWrapper,
}: {
  children: JSX.Element;
  onClickFn?: () => void;
  classNameWrapper?: string;
}) => {
  return (
    <div
      className={
        'container h-full px-3 mx-auto mt-20 pb-8  ' + classNameWrapper
      }
      style={{ minHeight: 'calc(100vh - 80px - 256px)' }}
      onClick={onClickFn}
    >
      {children}
    </div>
  );
};

export default WrapperContainer;
