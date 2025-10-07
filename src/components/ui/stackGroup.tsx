import React from "react";

type StackGropProps = {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
      titleId?: string;
      desc?: string;
      descId?: string;
    }
  >;
  label: string;
};
const StackGroup = ({ icon: IconComponent, label }: StackGropProps) => {
  return (
    <div className='flex flex-col lg:w-fit items-center  gap-4'>
      <span>
        <IconComponent />
      </span>
      <p>{label}</p>
    </div>
  );
};

export default StackGroup;
