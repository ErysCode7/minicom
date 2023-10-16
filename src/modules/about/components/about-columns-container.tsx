import { ReactNode } from 'react';

type AboutColumnsContainerProps = {
  children: ReactNode;
};

const AboutColumnsContainer = ({ children }: AboutColumnsContainerProps) => {
  return (
    <div className="mt-10 flex flex-col xl:flex-row gap-5">
      <div className="mt-5 flex flex-col laptop:flex-row laptop:items-center gap-10">
        {children}
      </div>
    </div>
  );
};

export default AboutColumnsContainer;
