import React from 'react';

const WrapperContainer = ({
  children,
  onClickFn,
  classNameWrappeper,
}: {
  children: JSX.Element;
  onClickFn?: () => void;
  classNameWrappeper?: string;
}) => {
  return (
    <div
      className={
        'container h-full px-3 mx-auto mt-20 pb-8 ' + classNameWrappeper
      }
      style={{ minHeight: 'calc(100vh - 80px - 256px)' }}
      onClick={onClickFn}
    >
      {children}
    </div>
  );
};

export default WrapperContainer;
